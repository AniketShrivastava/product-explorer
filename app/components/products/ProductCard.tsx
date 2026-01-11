import Link from 'next/link';
import { Product } from '@/app/types/product';
import { useFavorites } from '@/app/hooks/useFavorites';

type Props = {
  product: Product;
};

export function ProductCard({ product }: Props) {
   const { isFavorite, toggleFavorite } = useFavorites();
  return (
        <div className="relative rounded-lg ">
     {/* Favorite Button */}
      <button
        onClick={() => toggleFavorite(product.id)}
        className="absolute right-3 top-3 text-lg"
        aria-label="Toggle favorite"
      >
        {isFavorite(product.id) ? '❤️' : '🤍'}
      </button>
    <Link
     href={`/products/${product.id}`}
      className="block rounded-lg border bg-white p-4 transition hover:shadow-sm"
       prefetch={false}
    >
      <img
        src={product.image}
        alt={product.title}
        className="h-40 w-full object-contain"
      />

      <h3 className="mt-3 line-clamp-2 text-sm font-medium">
        {product.title}
      </h3>

      <p className="mt-1 text-sm text-gray-500">
        {product.category}
      </p>

      <p className="mt-2 font-semibold">
        ₹ {product.price}
      </p>
    </Link>
    </div>
  );
}
