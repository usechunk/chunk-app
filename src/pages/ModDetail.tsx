import { useParams, Link } from 'react-router-dom';
import { useMod } from '@/hooks/useApi';
import { ArrowDownTrayIcon, ClockIcon, CalendarIcon } from '@heroicons/react/24/outline';

export default function ModDetail() {
  const { id } = useParams<{ id: string }>();
  const { data: mod, isLoading, error } = useMod(id!);

  if (isLoading) {
    return <div className="text-center py-12 text-gray-500">Loading...</div>;
  }

  if (error || !mod) {
    return (
      <div className="text-center py-12">
        <p className="text-red-500 mb-4">Failed to load mod details.</p>
        <Link to="/mods" className="text-chunk-green hover:underline">
          Back to Mods
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Link to="/mods" className="text-chunk-green hover:underline mb-4 inline-block">
        ← Back to Mods
      </Link>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="aspect-[21/9] bg-gradient-to-br from-chunk-green to-chunk-brown flex items-center justify-center">
          {mod.image_url ? (
            <img src={mod.image_url} alt={mod.name} className="w-full h-full object-cover" />
          ) : (
            <span className="text-6xl text-white/20">📦</span>
          )}
        </div>

        <div className="p-8">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{mod.name}</h1>
              <p className="text-gray-600 mt-1">by {mod.author}</p>
            </div>
            <div className="flex items-center gap-2 text-gray-500">
              <ArrowDownTrayIcon className="h-5 w-5" />
              <span className="font-semibold">{mod.downloads.toLocaleString()}</span>
            </div>
          </div>

          <p className="text-gray-700 mb-6">{mod.description}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="font-semibold mb-2">Version</h3>
              <p className="text-gray-600">{mod.version}</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Minecraft Versions</h3>
              <div className="flex flex-wrap gap-2">
                {mod.minecraft_versions.map((v) => (
                  <span key={v} className="px-3 py-1 bg-gray-100 text-sm rounded">
                    {v}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="font-semibold mb-2">Categories</h3>
            <div className="flex flex-wrap gap-2">
              {mod.categories.map((cat) => (
                <span key={cat} className="px-3 py-1 bg-chunk-green/10 text-chunk-green text-sm rounded">
                  {cat}
                </span>
              ))}
            </div>
          </div>

          <div className="flex gap-4 text-sm text-gray-500 mb-6">
            <div className="flex items-center gap-1">
              <CalendarIcon className="h-4 w-4" />
              <span>Created {new Date(mod.created_at).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center gap-1">
              <ClockIcon className="h-4 w-4" />
              <span>Updated {new Date(mod.updated_at).toLocaleDateString()}</span>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Install with Chunk CLI</h3>
            <code className="text-sm text-gray-700">chunk install {mod.name}</code>
          </div>
        </div>
      </div>
    </div>
  );
}
