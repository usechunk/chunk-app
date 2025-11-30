import { Link } from 'react-router-dom';
import { ArrowDownTrayIcon, CubeIcon } from '@heroicons/react/24/outline';
import type { Modpack } from '@/lib/api';

interface ModpackCardProps {
  modpack: Modpack;
}

export default function ModpackCard({ modpack }: ModpackCardProps) {
  return (
    <Link
      to={`/modpacks/${modpack.id}`}
      className="bg-white rounded-lg shadow-sm hover:shadow-md transition border border-gray-200 overflow-hidden"
    >
      <div className="aspect-video bg-gradient-to-br from-chunk-brown to-chunk-green flex items-center justify-center">
        {modpack.image_url ? (
          <img src={modpack.image_url} alt={modpack.name} className="w-full h-full object-cover" />
        ) : (
          <span className="text-4xl text-white/20">📦</span>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 truncate">{modpack.name}</h3>
        <p className="text-sm text-gray-600 mt-1 line-clamp-2">{modpack.description}</p>
        <div className="mt-3 flex items-center justify-between text-sm text-gray-500">
          <span>by {modpack.author}</span>
          <div className="flex items-center gap-1">
            <ArrowDownTrayIcon className="h-4 w-4" />
            <span>{modpack.downloads.toLocaleString()}</span>
          </div>
        </div>
        <div className="mt-2 flex items-center gap-3 text-xs text-gray-500">
          <div className="flex items-center gap-1">
            <CubeIcon className="h-4 w-4" />
            <span>{modpack.mod_count} mods</span>
          </div>
          <span>MC {modpack.minecraft_version}</span>
        </div>
      </div>
    </Link>
  );
}
