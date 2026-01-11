import { notFound } from 'next/navigation';
import Image from 'next/image';
// import { fetchProductById } from '../../lib/api';
import { Product } from '../../types/product';
import { fetchProductById } from '@/app/lib/api';
import Link from 'next/link';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ProductPage({ params }: PageProps) {
  const { id } = await params;
  
  let product: Product;
  try {
    product = await fetchProductById(id);
    if (!product) notFound();
  } catch (error) {
    console.error('Product fetch error:', error);
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <Link
  href="/"
  aria-label="Close product details"
  className="
    fixed
    top-4
    right-4
    z-50
    flex
    h-10
    w-10
    items-center
    justify-center
    rounded-full
    bg-gray-600
    text-gray-700
    shadow-lg
    hover:bg-gray-100
    hover:text-black
    transition
  "
>
  ✕
</Link>

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Image */}
          <div className="relative h-[300px] w-full rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Details */}
          <div className="h-[300px]space-y-8">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                {product.title}
              </h1>
              <p className="text-sm text-gray-500 mb-6">
                Category: <span className="font-medium capitalize">{product.category}</span>
              </p>
              <p className="text-5xl font-bold text-green-600 mb-8">
                ₹{product.price.toLocaleString('hi-IN')}
              </p>
            </div>

            <div className="prose max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed">
                {product.description}
              </p>
            </div>

            <button className="w-full bg-blue-600 text-white py-4 px-8 rounded-xl text-lg font-semibold hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
