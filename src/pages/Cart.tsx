import { useState } from "react";
import { useRecoilState } from "recoil";
import { cartItemsAtom } from "@/atoms/cart";
import { Minus, Plus, Trash2, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { motion, AnimatePresence } from "framer-motion";

import products from "@/lib/data";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const [cartItems, setCartItems] = useRecoilState<string[]>(cartItemsAtom);
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [checkoutComplete, setCheckoutComplete] = useState(false);

  const navigate = useNavigate();

  const cartProducts = products.filter((product) =>
    cartItems.includes(product.id)
  );

  const updateQuantity = (id: string, change: number) => {
    setCartItems((items) => {
      const index = items.indexOf(id);
      if (index === -1) return items;
      const newItems = [...items];
      if (change > 0) {
        newItems.push(id);
      } else {
        newItems.splice(index, 1);
      }
      return newItems;
    });
  };

  const removeItem = (id: string) => {
    setCartItems((items) => items.filter((item) => item !== id));
  };

  const getQuantity = (id: string) =>
    cartItems.filter((item) => item === id).length;

  const totalPrice = cartProducts.reduce(
    (sum, product) => sum + product.price * getQuantity(product.id),
    0
  );

  const handleCheckout = () => {
    if (!localStorage.getItem("loggedIn")) return navigate("/login");
    setIsCheckingOut(true);
    // Simulate a checkout process
    setTimeout(() => {
      setIsCheckingOut(false);
      setCheckoutComplete(true);
      setCartItems([]); // Clear the cart
      localStorage.removeItem("cart");
      // Reset the checkout complete state after 3 seconds
      setTimeout(() => setCheckoutComplete(false), 3000);
    }, 2000);
  };

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle>Your Shopping Cart</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[400px] pr-4">
          {cartProducts.length === 0 ? (
            <p className="text-center text-muted-foreground">
              Your cart is empty
            </p>
          ) : (
            cartProducts.map((product) => {
              const quantity = getQuantity(product.id);
              return (
                <div
                  key={product.id}
                  className="flex items-center space-x-4 py-4"
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-16 w-16 rounded object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold">{product.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      ₹{product.price.toFixed(2)}
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => updateQuantity(product.id, -1)}
                      disabled={quantity === 1}
                      aria-label="Decrease quantity"
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="w-8 text-center">{quantity}</span>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => updateQuantity(product.id, 1)}
                      aria-label="Increase quantity"
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="destructive"
                      size="icon"
                      onClick={() => removeItem(product.id)}
                      aria-label="Remove item"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              );
            })
          )}
        </ScrollArea>
      </CardContent>
      <Separator />
      <CardFooter className="flex flex-col space-y-4">
        <div className="flex justify-between w-full">
          <div className="text-lg font-semibold">Total:</div>
          <div className="text-lg font-semibold">₹{totalPrice.toFixed(2)}</div>
        </div>
        <AnimatePresence>
          {!checkoutComplete && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="w-full"
            >
              <Button
                className="w-full"
                onClick={handleCheckout}
                disabled={cartProducts.length === 0 || isCheckingOut}
              >
                {isCheckingOut ? "Processing..." : "Checkout"}
              </Button>
            </motion.div>
          )}
          {checkoutComplete && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="flex items-center justify-center space-x-2 text-green-600"
            >
              <CheckCircle className="h-5 w-5" />
              <span>Checkout complete!</span>
            </motion.div>
          )}
        </AnimatePresence>
      </CardFooter>
    </Card>
  );
}
