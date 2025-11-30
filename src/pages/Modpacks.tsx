import { useState } from 'react';
import { useModpacks } from '@/hooks/useApi';
import { useDebounce } from '@/hooks/useDebounce';
import SearchBar from '@/components/SearchBar';
import ModpackCard from '@/components/ModpackCard';
import Pagination from '@/components/Pagination';

export default function Modpacks() {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const debouncedSearch = useDebounce(search);

  const { data, isLoading, error } = useModpacks({
    search: debouncedSearch,
    page,
    per_page: 12,
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Minecraft Modpacks</h1>
        <SearchBar
          value={search}
          onChange={setSearch}
          placeholder="Search modpacks..."
        />
      </div>

      {isLoading && (
        <div className="text-center py-12 text-gray-500">Loading...</div>
      )}

      {error && (
        <div className="text-center py-12 text-red-500">
          Failed to load modpacks. Please try again.
        </div>
      )}

      {data && (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {data.items.map((modpack) => (
              <ModpackCard key={modpack.id} modpack={modpack} />
            ))}
          </div>

          {data.items.length === 0 && (
            <div className="text-center py-12 text-gray-500">
              No modpacks found. Try a different search.
            </div>
          )}

          {data.total_pages > 1 && (
            <div className="mt-8">
              <Pagination
                currentPage={page}
                totalPages={data.total_pages}
                onPageChange={setPage}
              />
            </div>
          )}
        </>
      )}
    </div>
  );
}
