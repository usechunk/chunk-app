import { useParams, Link } from 'react-router-dom';
import { useModpack } from '@/hooks/useApi';
import { ArrowDownTrayIcon, ClockIcon, CalendarIcon, CubeIcon } from '@heroicons/react/24/outline';

export default function ModpackDetail() {
  const { id } = useParams<{ id: string }>();
  const { data: modpack, isLoading, error } = useModpack(id!);

  if (isLoading) {
    return <div className="text-center py-12 text-gray-500">Loading...</div>;
  }

  if (error || !modpack) {
    return (
      <div className="text-center py-12">
        <p className="text-red-500 mb-4">Failed to load modpack details.</p>
        <Link to="/modpacks" className="text-chunk-green hover:underline">
          Back to Modpacks
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Link to="/modpacks" className="text-chunk-green hover:underline mb-4 inline-block">
        ← Back to Modpacks
      </Link>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="aspect-[21/9] bg-gradient-to-br from-chunk-brown to-chunk-green flex items-center justify-center">
          {modpack.image_url ? (
            <img src={modpack.image_url} alt={modpack.name} className="w-full h-full object-cover" />
          ) : (
            <span className="text-6xl text-white/20">📦</span>
          )}
        </div>

        <div className="p-8">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{modpack.name}</h1>
              <p className="text-gray-600 mt-1">by {modpack.author}</p>
            </div>
            <div className="flex items-center gap-2 text-gray-500">
              <ArrowDownTrayIcon className="h-5 w-5" />
              <span className="font-semibold">{modpack.downloads.toLocaleString()}</span>
            </div>
          </div>

          <p className="text-gray-700 mb-6">{modpack.description}</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div>
              <h3 className="font-semibold mb-2">Version</h3>
              <p className="text-gray-600">{modpack.version}</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Minecraft Version</h3>
              <span className="px-3 py-1 bg-gray-100 text-sm rounded inline-block">
                {modpack.minecraft_version}
              </span>
            </div>
            <div>
              <h3 className="font-semibold mb-2 flex items-center gap-1">
                <CubeIcon className="h-5 w-5" />
                Included Mods
              </h3>
              <p className="text-gray-600">{modpack.mod_count} mods</p>
            </div>
          </div>

          <div className="flex gap-4 text-sm text-gray-500 mb-6">
            <div className="flex items-center gap-1">
              <CalendarIcon className="h-4 w-4" />
              <span>Created {new Date(modpack.created_at).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center gap-1">
              <ClockIcon className="h-4 w-4" />
              <span>Updated {new Date(modpack.updated_at).toLocaleDateString()}</span>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Install with Chunk CLI</h3>
            <code className="text-sm text-gray-700">chunk install {modpack.name}</code>
          </div>
        </div>
      </div>
    </div>
  );
}
