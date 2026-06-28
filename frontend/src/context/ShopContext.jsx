import { createContext, useState } from "react";

export const ShopContext = createContext();

export default function ShopProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  return (
    <ShopContext.Provider value={{ cart, setCart, wishlist, setWishlist }}>
      {children}
    </ShopContext.Provider>
  );
}