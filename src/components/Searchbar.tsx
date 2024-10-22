import { useCallback, useEffect, useState } from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Category, PRODUCT } from "@/types/product";
import { default as baseProducts } from "@/lib/data";

export default function SearchBar({
  setProducts,
}: {
  setProducts: React.Dispatch<React.SetStateAction<PRODUCT[]>>;
}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState<Category>(Category.ALL);

  const filterProducts = useCallback(
    (term: string, selectedCategory: Category) => {
      const filteredProducts = baseProducts.filter(
        (product) =>
          (selectedCategory === Category.ALL ||
            product.category === selectedCategory) &&
          product.title.toLowerCase().includes(term.toLowerCase())
      );
      setProducts(filteredProducts);
    },
    [setProducts]
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    filterProducts(searchTerm, category);
  };

  useEffect(() => {
    const localSeachTerm = localStorage.getItem("searchTerm") ?? "";
    const localCategory = localStorage.getItem("category") ?? Category.ALL;

    setSearchTerm(localSeachTerm);
    setCategory(localCategory as Category);

    filterProducts(localSeachTerm, localCategory as Category);
  }, [filterProducts]);

  return (
    <form onSubmit={handleSubmit} className="w-full mx-auto mb-8 px-4">
      <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2">
        <div className="w-full sm:w-auto">
          <Select
            value={category}
            onValueChange={(value) => {
              setCategory(value as Category);
              localStorage.setItem("category", value);
              filterProducts(searchTerm, value as Category);
            }}
          >
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              {Object.values(Category).map((cat) => (
                <SelectItem key={cat} value={cat}>
                  {cat}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="relative flex-grow w-full">
          <Search
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            aria-hidden="true"
          />
          <Input
            type="search"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              localStorage.setItem("searchTerm", e.target.value);
            }}
            className="w-full pl-10 pr-4 py-2"
            aria-label="Search products"
          />
        </div>
        <Button type="submit" className="w-full sm:w-auto">
          Search
        </Button>
      </div>
    </form>
  );
}
