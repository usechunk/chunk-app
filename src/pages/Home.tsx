import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center px-4">
      <div className="text-center max-w-3xl">
        <div className="mb-8 flex justify-center">
          <img src="/logo.png" alt="Chunk Logo" className="w-24 h-24" />
        </div>
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          Welcome to <span className="text-chunk-green">Chunk</span>Hub
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Your one-stop registry for Minecraft mods and modpacks. Browse, discover, and deploy with ease.
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            to="/mods"
            className="px-6 py-3 bg-chunk-green text-white rounded-lg hover:bg-chunk-green/90 transition font-medium"
          >
            Browse Mods
          </Link>
          <Link
            to="/modpacks"
            className="px-6 py-3 bg-chunk-brown text-white rounded-lg hover:bg-chunk-brown/90 transition font-medium"
          >
            Browse Modpacks
          </Link>
        </div>
        <div className="mt-12 p-6 bg-gray-100 rounded-lg">
          <h2 className="text-lg font-semibold mb-2">Install with Chunk CLI</h2>
          <code className="text-sm text-gray-700">chunk install &lt;mod-name&gt;</code>
        </div>
      </div>
    </div>
  );
}
