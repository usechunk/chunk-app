import { useState } from 'react';
import { useMods } from '@/hooks/useApi';
import { useDebounce } from '@/hooks/useDebounce';
import SearchBar from '@/components/SearchBar';
import ModCard from '@/components/ModCard';
import Pagination from '@/components/Pagination';

export default function Mods() {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const debouncedSearch = useDebounce(search);

  const { data, isLoading, error } = useMods({
    search: debouncedSearch,
    page,
    per_page: 12,
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Minecraft Mods</h1>
        <SearchBar
          value={search}
          onChange={setSearch}
          placeholder="Search mods..."
        />
      </div>

      {isLoading && (
        <div className="text-center py-12 text-gray-500">Loading...</div>
      )}

      {error && (
        <div className="text-center py-12 text-red-500">
          Failed to load mods. Please try again.
        </div>
      )}

      {data && (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {data.items.map((mod) => (
              <ModCard key={mod.id} mod={mod} />
            ))}
          </div>

          {data.items.length === 0 && (
            <div className="text-center py-12 text-gray-500">
              No mods found. Try a different search.
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
