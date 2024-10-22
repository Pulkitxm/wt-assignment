import { atom, selector } from "recoil";

let localStoageCart: string[];

try {
  const keys = localStorage?.getItem("cart");
  localStoageCart = keys ? JSON.parse(keys) : [];
} catch (e) {
  console.error(e);
  localStoageCart = [];
}

export const cartItemsAtom = atom<string[]>({
  key: "cartItemsAtom",
  default: localStoageCart,
});

export const isAddedToCart = selector({
  key: "isAddedToCart",
  get: ({ get }) => {
    const cartItems = get(cartItemsAtom);
    return (productId: string) => cartItems.includes(productId);
  },
});

export const getCartCount = selector({
  key: "getCartCount",
  get: ({ get }) => {
    const cartItems = get(cartItemsAtom);
    return cartItems.length;
  },
});
