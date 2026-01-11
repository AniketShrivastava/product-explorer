const STORAGE_KEY = 'favorite_products';

export function getFavoriteIds(): number[] {
  if (typeof window === 'undefined') return [];
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
  } catch {
    return [];
  }
}

export function setFavoriteIds(ids: number[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(ids));
}
