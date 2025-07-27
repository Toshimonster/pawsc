using System.Numerics;
using PAWSC.Interfaces;
using PAWSC.Runtime; // Use System.Numerics for Vector3, Matrix4x4, Quaternion
using SkiaSharp;

namespace PAWSC.Scenes.Implementations;

public abstract class SkiaSharp3DScene : SkiaSharpScene
{
    protected record Camera
    {
        public Vector3 Position;
        public Vector3 Target;
        public Vector3 Up = Vector3.UnitY;
        public float FovDegrees = 60;
        public float AspectRatio;
        public float NearPlane = 0.1f;
        public float FarPlane = 100f;

        public Matrix4x4 GetViewMatrix() => 
            Matrix4x4.CreateLookAt(Position, Target, Up);

        public Matrix4x4 GetProjectionMatrix() => 
            Matrix4x4.CreatePerspectiveFieldOfView(
                MathF.PI * FovDegrees / 180f,
                AspectRatio,
                NearPlane,
                FarPlane);
    }

    protected class Mesh
    {
        public Vector3[] Vertices;
        public int[][] Faces; // each face is an int[] of vertex indices
        public SKImage[]? FaceTextures; // optional textures per face
        public SKColor Color = SKColors.Gray;

        public Mesh(Vector3[] vertices, int[][] faces, SKImage[]? faceTextures = null)
        {
            Vertices = vertices;
            Faces = faces;
            FaceTextures = faceTextures;
        }
    }

    protected readonly List<Mesh> SceneMeshes = new();

    // Interface-specific cameras; override to provide real per-interface views
    protected virtual Camera? GetCameraForInterface(IPawsInterface iface)
    {
        float aspect = (float)SceneImageInfo.Width / SceneImageInfo.Height;
        return new Camera
        {
            Position = new Vector3(0, 0, 5),
            Target = Vector3.Zero,
            AspectRatio = aspect
        };
    }

    protected SkiaSharp3DScene(string name, int width = 255, int height = 255)
        : base(name, width, height)
    {
    }

    public override void Draw(PawsInterfaceManager mgr, DrawInfo drawInfo)
    {
        Canvas.Clear(SKColors.Black);
        RenderScene(drawInfo);

        using var snapshot = Surface.Snapshot();

        foreach (var iface in mgr.GetAll())
        {
            var view = GetViewForInterface(iface);
            if (view == null) continue;

            using var viewImage = CreateViewImage((SKRect)view, iface, snapshot);

            var encoded = viewImage.PeekPixels().GetPixels();

            var len = iface.InterfaceInfo.GetByteSize();
            var data = new byte[len];
            System.Runtime.InteropServices.Marshal.Copy(encoded, data, 0, len);

            iface.Accept(new ReadOnlySpan<byte>(data));
        }
    }

    protected override SKRect? GetViewForInterface(IPawsInterface iface)
        => new SKRect(0, 0, SceneImageInfo.Width, SceneImageInfo.Height);

    /// <summary>Override to render all 3D meshes.</summary>
    protected override void RenderScene(DrawInfo drawInfo)
    {
        var camera = GetCameraForInterface(null!); // no iface param here
        if (camera == null)
            return;

        var viewMatrix = camera.GetViewMatrix();
        var projMatrix = camera.GetProjectionMatrix();

        foreach (var mesh in SceneMeshes)
            DrawMesh(mesh, viewMatrix, projMatrix);
    }

    protected void DrawMesh(Mesh mesh, Matrix4x4 view, Matrix4x4 proj)
    {
        var transformedVerts = new Vector3[mesh.Vertices.Length];
        for (int i = 0; i < mesh.Vertices.Length; i++)
        {
            var v = mesh.Vertices[i];
            transformedVerts[i] = Vector3.Transform(v, view);
            transformedVerts[i] = Vector3.Transform(transformedVerts[i], proj);
        }

        // Project and map to screen space
        var screenPoints = transformedVerts.Select(v =>
            new SKPoint(
                (v.X + 1) * SceneImageInfo.Width / 2,
                (1 - v.Y) * SceneImageInfo.Height / 2))
            .ToArray();

        // Sort faces back to front by average Z for simple painter's algorithm
        var faceDepths = mesh.Faces.Select((face, idx) =>
        {
            var avgZ = face.Select(vi => transformedVerts[vi].Z).Average();
            return (idx, avgZ);
        })
        .OrderByDescending(t => t.avgZ);

        foreach (var (faceIndex, _) in faceDepths)
        {
            var face = mesh.Faces[faceIndex];
            var quad = face.Select(vi => screenPoints[vi]).ToArray();

            if (mesh.FaceTextures != null && mesh.FaceTextures.Length > faceIndex && mesh.FaceTextures[faceIndex] != null)
            {
                DrawImageOnFace(mesh.FaceTextures[faceIndex], quad);
            }
            else
            {
                DrawSolidFace(quad, mesh.Color);
            }
        }
    }

    protected void DrawImageOnFace(SKImage? image, SKPoint[] quad)
    {
        if (image == null || quad.Length < 3)
            return;

        // We triangulate the polygon (assumes quad or triangle faces)
        var texCoords = quad.Select((_, i) =>
            i switch
            {
                0 => new SKPoint(0, 0),
                1 => new SKPoint(image.Width, 0),
                2 => new SKPoint(image.Width, image.Height),
                3 => new SKPoint(0, image.Height),
                _ => new SKPoint(0, 0)
            }).ToArray();

        ushort[] indices;
        if (quad.Length == 3)
            indices = new ushort[] { 0, 1, 2 };
        else if (quad.Length == 4)
            indices = new ushort[] { 0, 1, 2, 0, 2, 3 };
        else
            return; // unsupported face shape

        using var vertices = SKVertices.CreateCopy(
            SKVertexMode.Triangles,
            quad,
            texCoords,
            null,
            indices);

        using var paint = new SKPaint
        {
            Shader = image.ToShader(),
            IsAntialias = true
        };

        Canvas.DrawVertices(vertices, SKBlendMode.SrcOver, paint);
    }

    protected void DrawSolidFace(SKPoint[] points, SKColor color)
    {
        using var paint = new SKPaint
        {
            Color = color,
            Style = SKPaintStyle.Fill,
            IsAntialias = true
        };

        using var path = new SKPath();
        path.MoveTo(points[0]);
        for (int i = 1; i < points.Length; i++)
            path.LineTo(points[i]);
        path.Close();

        Canvas.DrawPath(path, paint);
    }
}

public class SpinningCubeAndPrismScene : SkiaSharp3DScene
{
    private float _angle = 0;

    private Mesh? _cubeMesh;
    private Mesh? _prismMesh;

    public SpinningCubeAndPrismScene(string name, int width = 255, int height = 255)
        : base(name, width, height)
    {
    }

    public override void Initialise(PawsRuntime runtime)
    {
        base.Initialise(runtime);

        // Cube vertices and faces (6 quads)
        var size = 0.1f;
        var cubeVerts = new[]
        {
            new Vector3(-size, -size, -size),
            new Vector3(size, -size, -size),
            new Vector3(size, size, -size),
            new Vector3(-size, size, -size),

            new Vector3(-size, -size, size),
            new Vector3(size, -size, size),
            new Vector3(size, size, size),
            new Vector3(-size, size, size),
        };

        var cubeFaces = new[]
        {
            new[] {0, 1, 2, 3}, // back
            new[] {4, 5, 6, 7}, // front
            new[] {0, 4, 7, 3}, // left
            new[] {1, 5, 6, 2}, // right
            new[] {3, 2, 6, 7}, // top
            new[] {0, 1, 5, 4}  // bottom
        };

        _cubeMesh = new Mesh(cubeVerts, cubeFaces, null)
        {
            Color = SKColors.CornflowerBlue
        };

        // Triangular prism vertices and faces (5 faces: 2 triangles + 3 quads)
        var prismVerts = new[]
        {
            new Vector3(-size, -size, 0),
            new Vector3(size, -size, 0),
            new Vector3(0, size, 0),

            new Vector3(-size, -size, size * 2),
            new Vector3(size, -size, size * 2),
            new Vector3(0, size, size * 2),
        };

        var prismFaces = new[]
        {
            new[] {0, 1, 2},       // back triangle
            new[] {3, 4, 5},       // front triangle
            new[] {0, 1, 4, 3},    // bottom quad
            new[] {1, 2, 5, 4},    // right quad
            new[] {2, 0, 3, 5}     // left quad
        };

        _prismMesh = new Mesh(prismVerts, prismFaces, null)
        {
            Color = SKColors.OrangeRed
        };

        SceneMeshes.Add(_cubeMesh);
        SceneMeshes.Add(_prismMesh);
    }

    protected override void RenderScene(DrawInfo drawInfo)
    {
        Canvas.Clear(SKColors.Black);

        // Animate rotation angle
        _angle += (float)(drawInfo.Deltatime * 0.000000001);
        _angle %= 2 * MathF.PI;
        Console.WriteLine(_angle);

        // Update cube mesh vertices rotation
        RotateMesh(_cubeMesh!, (float)(drawInfo.Deltatime * 0.00000001), (float)(drawInfo.Deltatime * 0.00000001));

        // Prism rotates slower
        RotateMesh(_prismMesh!, (float)(drawInfo.Deltatime * 0.00000001) * 0.5f, (float)(drawInfo.Deltatime * 0.00000001) * 0.3f);

        // Call base render to draw all meshes
        base.RenderScene(drawInfo);
    }

    private void RotateMesh(Mesh mesh, float rotX, float rotY)
    {
        var rotXMat = Matrix4x4.CreateRotationX(rotX);
        var rotYMat = Matrix4x4.CreateRotationY(rotY);
        var rotMat = rotXMat * rotYMat;

        for (int i = 0; i < mesh.Vertices.Length; i++)
        {
            var v = mesh.Vertices[i];
            mesh.Vertices[i] = Vector3.Transform(v, rotMat);
        }
    }
}
