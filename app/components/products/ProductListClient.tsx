'use client';

import { useMemo, useState, useEffect } from 'react';
import { ProductGrid } from './ProductGrid';
import { CategoryFilter } from '../filters/CategoryFilter';
import { SearchBar } from '../filters/SearchBar';
import { Product } from '@/app/types/product';
import { useFavorites } from '@/app/hooks/useFavorites';

type Props = {
  products: Product[];
};

export function ProductListClient({ products }: Props) {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
  const [showFavorites, setShowFavorites] = useState(false);
  const [sort, setSort] = useState<'asc' | 'desc' | ''>('');
  const [page, setPage] = useState(1);

  const ITEMS_PER_PAGE = 8;
  const { favorites } = useFavorites();

  // Reset page on filter/sort change
  useEffect(() => {
    setPage(1);
  }, [search, category, showFavorites, sort]);

  const categories = useMemo(
    () => Array.from(new Set(products.map(p => p.category))),
    [products]
  );

  const filteredProducts = useMemo(() => {
    let result = products.filter(product => {
      const matchesSearch = product.title
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesCategory = category
        ? product.category === category
        : true;

      const matchesFavorites = showFavorites
        ? favorites.includes(product.id)
        : true;

      return matchesSearch && matchesCategory && matchesFavorites;
    });

    if (sort === 'asc') {
      result = [...result].sort((a, b) => a.price - b.price);
    }

    if (sort === 'desc') {
      result = [...result].sort((a, b) => b.price - a.price);
    }

    return result;
  }, [products, search, category, showFavorites, favorites, sort]);

  const paginatedProducts = useMemo(() => {
    const startIndex = (page - 1) * ITEMS_PER_PAGE;
    return filteredProducts.slice(
      startIndex,
      startIndex + ITEMS_PER_PAGE
    );
  }, [filteredProducts, page]);

  return (
    <div className="space-y-4">
      {/* Filters */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <SearchBar value={search} onChange={setSearch} />

        <CategoryFilter
          categories={categories}
          value={category}
          onChange={setCategory}
        />

        <select
          className="rounded border px-3 py-2 text-sm"
          value={sort}
          onChange={(e) =>
            setSort(e.target.value as 'asc' | 'desc' | '')
          }
        >
          <option value="">Sort by price</option>
          <option value="asc">Price: Low → High</option>
          <option value="desc">Price: High → Low</option>
        </select>

        <label className="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            checked={showFavorites}
            onChange={(e) =>
              setShowFavorites(e.target.checked)
            }
          />
          Favorites
        </label>
      </div>

      {/* Products */}
      <ProductGrid products={paginatedProducts} />

      {filteredProducts.length === 0 && (
        <p className="text-sm text-gray-500">
          No products found.
        </p>
      )}

      {/* Pagination */}
      {filteredProducts.length > ITEMS_PER_PAGE && (
        <div className="flex items-center justify-center gap-4 pt-4">
          <button
            className="rounded border px-3 py-1 text-sm disabled:opacity-50"
            disabled={page === 1}
            onClick={() => setPage(p => p - 1)}
          >
            Prev
          </button>

          <span className="text-sm">
            Page {page}
          </span>

          <button
            className="rounded border px-3 py-1 text-sm disabled:opacity-50"
            disabled={
              page * ITEMS_PER_PAGE >= filteredProducts.length
            }
            onClick={() => setPage(p => p + 1)}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
