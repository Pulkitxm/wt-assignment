import { Route, Routes } from "react-router-dom";
import Home from "@pages/Home";
import CartIcon from "./components/ShoppingCart";
import Cart from "@pages/Cart";
import { Link } from "react-router-dom";

export default function App() {
  return (
    <div className="max-w-7xl mx-auto pt-4 px-4 sm:px-6 lg:px-8">
      <div className=" mb-6">
        <Link to="/" className="text-3xl font-bold">
          Welcome to Our Store
        </Link>
        <h2 className="opacity-20 text-[10px]">Assignemnt: Pulkit CSE-1</h2>
      </div>
      <CartIcon />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}
