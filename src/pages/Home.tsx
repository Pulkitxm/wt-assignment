import { useState } from "react";
import SearchBar from "@components/Searchbar";
import { default as baseProducts } from "@lib/data";
import ProductList from "@components/ProductList";

export default function HomePage() {
  const [products, setProducts] = useState(baseProducts);
  return (
    <>
      <SearchBar setProducts={setProducts} />
      <ProductList products={products} />
    </>
  );
}
