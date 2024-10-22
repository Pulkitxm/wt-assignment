import { Route, Routes } from "react-router-dom";
import HomePage from "@pages/Home";
import CartIcon from "./components/ShoppingCart";

export default function App() {
  return (
    <div className="max-w-7xl mx-auto pt-4 px-4 sm:px-6 lg:px-8">
      <div className=" mb-6">
        <h1 className="text-3xl font-bold">Welcome to Our Store</h1>
        <h2 className="opacity-20 text-[10px]">Assignemnt: Pulkit CSE-1</h2>
      </div>
      <CartIcon />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}
