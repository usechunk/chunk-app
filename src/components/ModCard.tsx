import { Link } from 'react-router-dom';
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline';
import type { Mod } from '@/lib/api';

interface ModCardProps {
  mod: Mod;
}

export default function ModCard({ mod }: ModCardProps) {
  return (
    <Link
      to={`/mods/${mod.id}`}
      className="bg-white rounded-lg shadow-sm hover:shadow-md transition border border-gray-200 overflow-hidden"
    >
      <div className="aspect-video bg-gradient-to-br from-chunk-green to-chunk-brown flex items-center justify-center">
        {mod.image_url ? (
          <img src={mod.image_url} alt={mod.name} className="w-full h-full object-cover" />
        ) : (
          <span className="text-4xl text-white/20">📦</span>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 truncate">{mod.name}</h3>
        <p className="text-sm text-gray-600 mt-1 line-clamp-2">{mod.description}</p>
        <div className="mt-3 flex items-center justify-between text-sm text-gray-500">
          <span>by {mod.author}</span>
          <div className="flex items-center gap-1">
            <ArrowDownTrayIcon className="h-4 w-4" />
            <span>{mod.downloads.toLocaleString()}</span>
          </div>
        </div>
        <div className="mt-2 flex flex-wrap gap-1">
          {mod.categories.slice(0, 3).map((cat) => (
            <span key={cat} className="px-2 py-1 bg-gray-100 text-xs rounded">
              {cat}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
