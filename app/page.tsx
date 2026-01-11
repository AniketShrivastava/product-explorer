import { ProductListClient } from "./components/products/ProductListClient";
import { fetchProducts } from "./lib/api";


export default async function HomePage() {
  const products = await fetchProducts();
  // console.log(products)

  return (
    <section className="space-y-6 flex-1 p-4">
      <h1 className="text-2xl font-semibold">
        Products
      </h1>

      <ProductListClient products={products} />
    </section>
  );
}
