'use client';

import { useCallback, useEffect, useState } from 'react';
import { getFavoriteIds, setFavoriteIds } from '../lib/storage';
// import { getFavoriteIds, setFavoriteIds } from '@/lib/favorites';

export function useFavorites() {
  const [favorites, setFavorites] = useState<number[]>([]);

  useEffect(() => {
    setFavorites(getFavoriteIds());
  }, []);

  const toggleFavorite = useCallback((id: number) => {
    setFavorites(prev => {
      const updated = prev.includes(id)
        ? prev.filter(favId => favId !== id)
        : [...prev, id];

      setFavoriteIds(updated);
      return updated;
    });
  }, []);

  const isFavorite = useCallback(
    (id: number) => favorites.includes(id),
    [favorites]
  );

  return {
    favorites,
    favoritesCount: favorites.length,
    toggleFavorite,
    isFavorite,
  };
}
