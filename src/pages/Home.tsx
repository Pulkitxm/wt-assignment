import { useState } from "react";
import SearchBar from "@components/Searchbar";
import { default as baseProducts } from "@lib/data";
import ProductList from "@components/ProductList";

export default function HomePage() {
  const [products, setProducts] = useState(baseProducts);
  return (
    <div className="max-w-7xl mx-auto pt-4 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-6">Welcome to Our Store</h1>
      <SearchBar setProducts={setProducts} />
      <ProductList products={products} />
    </div>
  );
}
