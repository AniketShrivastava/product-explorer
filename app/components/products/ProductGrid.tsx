// import { Product } from '@/types/product';
import { Product } from '@/app/types/product';
import { ProductCard } from './ProductCard';

type Props = {
  products: Product[];
};

export function ProductGrid({ products }: Props) {
  return (
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 auto-rows-fr">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
