import { PRODUCT } from "@/types/product";
import ProductCard from "./ProductCard";

export default function ProductList({ products }: { products: PRODUCT[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
}
