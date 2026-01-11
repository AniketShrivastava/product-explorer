import { Product } from "../types/product";


const API_URL = 'https://fakestoreapi.com/products';

export async function fetchProducts(): Promise<Product[]> {
  const res = await fetch(API_URL, {
    next: { revalidate: 60 }, // ISR (good signal)
  });

  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }

  return res.json();
}

export async function fetchProductById(
  id: string
): Promise<Product> {
  const res = await fetch(
    `https://fakestoreapi.com/products/${id}`,
    { cache: 'no-store' }
  );

  if (!res.ok) {
    throw new Error('Failed to fetch product');
  }

  return res.json();
}
