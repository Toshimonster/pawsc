using System.Collections.Concurrent;
using PAWSC.Runtime;
using PAWSC.Scenes.Implementations;
using PAWSC.Scenes.Implementations.State;

namespace PAWSC.Controllers.Implementations;

public class FileState
{
    private readonly Identifier _stateId;
    public IPawsGif Gif { get; private set; }

    public IPawsState State
    {
        get
        {
            var state = new BaseState(_stateId);
            state.AddGif(new Identifier("LEFT_P45"), Gif);
            return state;
        }
    }

    private FileState(IPawsGif gif, Identifier stateId)
    {
        Gif = gif;
        _stateId = stateId;
    }

    public static FileState From(string path, byte[] content)
    {
        var id = new Identifier(Path.GetFileNameWithoutExtension(path));
        return new FileState(PawsGif.FromBytes(content, id), id);
    }

    public FileState UpdateFrom(byte[] content)
    {
        Gif = PawsGif.FromBytes(content, _stateId);
        return this;
    }

    public static FileState FromAndAddToScene(string path, byte[] content, StateScene? scene)
    {
        FileState state = From(path, content);
        scene?.AddStateIfNotExist(state.State);
        return state;
    }

    public FileState UpdateFromAndAddToScene(byte[] content, StateScene? scene)
    {
        UpdateFrom(content);
        scene?.AddStateIfNotExist(State);
        return this;
    }

    public void RemoveFromScene(StateScene? scene)
    {
        scene?.RemoveState(State);
    }
}

public class FileSystemStateController : PawsController
{
    private StateScene? StateScene;
    private readonly ConcurrentDictionary<string, FileState> FileStates = new();
    private readonly FileSystemWatcher Watcher;
    private readonly string FilePath;

    public FileSystemStateController(Identifier id, string filePath) : base(id)
    {
        FilePath = filePath;

        if (!Directory.Exists(FilePath))
            throw new DirectoryNotFoundException($"Directory not found: {FilePath}");

        Watcher = new FileSystemWatcher(FilePath)
        {
            IncludeSubdirectories = true,
            EnableRaisingEvents = false,
            NotifyFilter = NotifyFilters.FileName | NotifyFilters.LastWrite | NotifyFilters.DirectoryName,
            Filter = "*.gif" // only watch .gif files
        };
    }

    public override async Task Initialise(PawsRuntime runtime)
    {
        await base.Initialise(runtime);
        StateScene = runtime.Scenes.ValuesOfType<StateScene>().FirstOrDefault();
        if (StateScene is null)
        {
            Runtime?.Broadcast(PawsCommands.Log.Warn("Creating StateScene as none are detected"));
            runtime.Scenes.Add(new StateScene(Identifier.Random()));
            StateScene = runtime.Scenes.ValuesOfType<StateScene>().First();
        }

        // wire handlers BEFORE enabling
        Watcher.Changed += async (sender, args) =>
        {
            Runtime?.Broadcast(PawsCommands.Log.Info($"File changed: {args.FullPath}"));
            await TryLoadFile(args.FullPath);
        };
        Watcher.Created += async (sender, args) =>
        {
            if (Directory.Exists(args.FullPath))
            {
                Runtime?.Broadcast(PawsCommands.Log.Info($"Directory created: {args.FullPath}"));
                var files = Directory.GetFiles(args.FullPath, "*.gif", SearchOption.AllDirectories);
                Runtime?.Broadcast(PawsCommands.Log.Trace($"Found {files.Length} .gif file(s) under new directory {args.FullPath}: {string.Join(", ", files)}"));
                await LoadAllMissingFiles(files);
            }
            else if (args.FullPath.EndsWith(".gif", StringComparison.OrdinalIgnoreCase))
            {
                Runtime?.Broadcast(PawsCommands.Log.Info($"GIF file created: {args.FullPath}"));
                await TryLoadFile(args.FullPath);
            }
        };
        Watcher.Deleted += (sender, args) =>
        {
            if (args.FullPath.EndsWith(".gif", StringComparison.OrdinalIgnoreCase) || Directory.Exists(args.FullPath))
            {
                Runtime?.Broadcast(PawsCommands.Log.Info($"Deleted: {args.FullPath}"));
                DeleteFile(args.FullPath);
            }
        };
        Watcher.Renamed += async (sender, args) =>
        {
            Runtime?.Broadcast(PawsCommands.Log.Info($"Renamed: {args.OldFullPath} -> {args.FullPath}"));
            DeleteFile(args.OldFullPath);
            if (args.FullPath.EndsWith(".gif", StringComparison.OrdinalIgnoreCase) || Directory.Exists(args.FullPath))
                await TryLoadFile(args.FullPath);
        };

        // initial recursive load
        await LoadAllFiles();

        Watcher.EnableRaisingEvents = true;
    }

    private Task LoadAllFiles()
    {
        Runtime?.Broadcast(PawsCommands.Log.Info("Loading all .gif files"));
        var all = Directory.GetFiles(FilePath, "*.gif", SearchOption.AllDirectories);
        Runtime?.Broadcast(PawsCommands.Log.Trace($"Loading all .gif files at {FilePath} ({all.Length} files)"));
        return LoadAllMissingFiles(all);
    }

    private Task LoadAllMissingFiles(string[] toLoad)
    {
        return Task.WhenAll(toLoad.Select(TryLoadFile));
    }

    private async Task TryLoadFile(string file)
    {
        try
        {
            Runtime?.Broadcast(PawsCommands.Log.Trace($"Attempting to load path {file}"));

            if (Directory.Exists(file))
            {
                var files = Directory.GetFiles(file, "*.gif", SearchOption.AllDirectories);
                Runtime?.Broadcast(PawsCommands.Log.Info($"Loading directory {file} with {files.Length} .gif file(s)"));
                Runtime?.Broadcast(PawsCommands.Log.Trace($"Files: {string.Join(", ", files)}"));
                await LoadAllMissingFiles(files);
                return;
            }

            if (!File.Exists(file) || !file.EndsWith(".gif", StringComparison.OrdinalIgnoreCase))
            {
                Runtime?.Broadcast(PawsCommands.Log.Trace($"Skipping non-gif or missing file: {file}"));
                return;
            }

            await LoadFile(file);
        }
        catch (Exception e)
        {
            Runtime?.Broadcast(PawsCommands.Log.Error($"Could not load state file {file}", e));
        }
    }

    private async Task LoadFile(string file)
    {
        Runtime?.Broadcast(PawsCommands.Log.Info($"Loading State {file}"));

        byte[]? fileBytes = await ReadFileRetryAsync(file);
        if (fileBytes is null)
        {
            Runtime?.Broadcast(PawsCommands.Log.Warn($"Failed to read file after retries: {file}"));
            return;
        }

        FileStates.AddOrUpdate(
            file,
            s =>
            {
                Runtime?.Broadcast(PawsCommands.Log.Info($"Adding new state for {s}"));
                return FileState.FromAndAddToScene(s, fileBytes, StateScene);
            },
            (_, state) =>
            {
                Runtime?.Broadcast(PawsCommands.Log.Info($"Updating existing state for {file}"));
                return state.UpdateFromAndAddToScene(fileBytes, StateScene);
            });
    }

    private async Task<byte[]?> ReadFileRetryAsync(string path, int retries = 5, int delayMs = 100)
    {
        for (int i = 0; i < retries; i++)
        {
            try
            {
                return await File.ReadAllBytesAsync(path);
            }
            catch (IOException ex)
            {
                Runtime?.Broadcast(PawsCommands.Log.Warn($"Retry {i + 1}/{retries}: IO error reading {path}: {ex.Message}"));
                await Task.Delay(delayMs);
            }
            catch (UnauthorizedAccessException ex)
            {
                Runtime?.Broadcast(PawsCommands.Log.Warn($"Retry {i + 1}/{retries}: Unauthorized reading {path}: {ex.Message}"));
                await Task.Delay(delayMs);
            }
        }
        return null;
    }

    private void DeleteFile(string path)
    {
        Runtime?.Broadcast(PawsCommands.Log.Info($"Removing State(s) for {path}"));

        string normalizedRequested;
        try
        {
            normalizedRequested = Path.GetFullPath(path).TrimEnd(Path.DirectorySeparatorChar, Path.AltDirectorySeparatorChar);
        }
        catch
        {
            normalizedRequested = path.TrimEnd(Path.DirectorySeparatorChar, Path.AltDirectorySeparatorChar);
        }

        Runtime?.Broadcast(PawsCommands.Log.Trace($"Checking for states to remove under {normalizedRequested}"));

        var toRemove = FileStates.Keys
            .Where(k =>
            {
                try
                {
                    var kn = Path.GetFullPath(k).TrimEnd(Path.DirectorySeparatorChar, Path.AltDirectorySeparatorChar);
                    return kn.Equals(normalizedRequested, StringComparison.OrdinalIgnoreCase)
                        || kn.StartsWith(normalizedRequested + Path.DirectorySeparatorChar, StringComparison.OrdinalIgnoreCase)
                        || kn.StartsWith(normalizedRequested + Path.AltDirectorySeparatorChar, StringComparison.OrdinalIgnoreCase);
                }
                catch
                {
                    return string.Equals(k, path, StringComparison.OrdinalIgnoreCase);
                }
            })
            .ToList();

        foreach (var key in toRemove)
        {
            if (FileStates.TryRemove(key, out var state))
            {
                Runtime?.Broadcast(PawsCommands.Log.Info($"Removed state for {key}"));
                state?.RemoveFromScene(StateScene);
            }
        }

        if (!toRemove.Any())
        {
            Runtime?.Broadcast(PawsCommands.Log.Trace($"No states matched {path} to remove"));
        }
    }
}
