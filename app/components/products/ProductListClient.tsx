'use client';

import { useMemo, useState } from 'react';
// import { Product } from '@/types/product';
import { ProductGrid } from './ProductGrid';
import { CategoryFilter } from '../filters/CategoryFilter';
import { SearchBar } from '../filters/SearchBar';
import { Product } from '@/app/types/product';
import { useFavorites } from '@/app/hooks/useFavorites';
// import { useFavorites } from '@/hooks/useFavorites';

type Props = {
  products: Product[];
};

export function ProductListClient({ products }: Props) {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
  const [showFavorites, setShowFavorites] = useState(false);

  const { favorites } = useFavorites();

  const categories = useMemo(
    () => Array.from(new Set(products.map(p => p.category))),
    [products]
  );

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
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
  }, [products, search, category, showFavorites, favorites]);

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

      {/* Result */}
      <ProductGrid products={filteredProducts} />

      {filteredProducts.length === 0 && (
        <p className="text-sm text-gray-500">
          No products found.
        </p>
      )}
    </div>
  );
}
