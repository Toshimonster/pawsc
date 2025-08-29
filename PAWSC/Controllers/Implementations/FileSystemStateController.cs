using System.Collections.Concurrent;
using PAWSC.Runtime;
using PAWSC.Scenes.Implementations;

namespace PAWSC.Controllers.Implementations;

public class FileState
{
    public IPawsGif Gif { get; private set; }

    public IPawsState State
    {
        get
        {
            BaseState state = new BaseState(Identifier.Random());
            state.AddGif(new Identifier("LEFT_P45"), Gif);
            return state;
        }
    }

    private FileState(IPawsGif gif)
    {
        Gif = gif;
    }

    public static FileState From(string path, byte[] content)
    {
        return new FileState(PawsGif.FromBytes(
            content,
            new Identifier(Path.GetFileNameWithoutExtension(path))
            ));
    }

    public FileState UpdateFrom(byte[] content)
    {
        Gif = PawsGif.FromBytes(content, State.Id);
        return this;
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
            NotifyFilter = NotifyFilters.FileName | NotifyFilters.LastWrite
        };
    }

    public override async Task Initialise(PawsRuntime runtime)
    {
        await base.Initialise(runtime);
        StateScene = runtime.Scenes.ValuesOfType<StateScene>().FirstOrDefault();
        if (StateScene is null)
        {
            Runtime?.Broadcast(PawsCommands.Log.Warn("Ignoring FileSystemStateController as no StateScene is detected"));
            return;
        }

        await LoadAllFiles();
        Watcher.EnableRaisingEvents = true;
        Watcher.Changed += async (sender, args) =>
        {
            await TryLoadFile(args.FullPath);
        };
        Watcher.Created += async (sender, args) =>
        {
            await TryLoadFile(args.FullPath);
        };
        Watcher.Deleted += (sender, args) =>
        {
            DeleteFile(args.FullPath);
        };
    }

    private Task LoadAllFiles()
    {
        return LoadAllMissingFiles(Directory.GetFiles(FilePath));
    }

    private Task LoadAllMissingFiles(string[] toLoad)
    {
        return Task.WhenAll(toLoad.Select(TryLoadFile));
    }

    private async Task TryLoadFile(string file)
    {
        try
        {
            await LoadFile(file);
        }
        catch (Exception e)
        {
            Runtime?.Broadcast(PawsCommands.Log.Error($"Could not load state file {FilePath}", e));
        }
    }

    private async Task LoadFile(string file)
    {
        byte[] fileBytes = await File.ReadAllBytesAsync(file);
        FileStates.AddOrUpdate(
            file,
            s => FileState.From(s, fileBytes),
            (_, state) => state.UpdateFrom(fileBytes));
        StateScene?.AddState(FileStates[file].State);
    }

    private void DeleteFile(string file)
    {
        FileStates.TryRemove(file, out _);
    }
}
