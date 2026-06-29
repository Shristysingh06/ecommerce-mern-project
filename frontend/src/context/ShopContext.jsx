import { createContext, useState } from "react";

export const ShopContext = createContext();

export default function ShopProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  // 🛒 ADD CART
  const addToCart = (product) => {
    const exists = cart.find((item) => item.id === product.id);

    if (exists) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, qty: (item.qty || 1) + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  // ➕➖ UPDATE QTY (🔥 MISSING FUNCTION FIX)
  const updateQty = (id, type) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? {
              ...item,
              qty:
                type === "inc"
                  ? item.qty + 1
                  : item.qty > 1
                  ? item.qty - 1
                  : 1,
            }
          : item
      )
    );
  };

  // ❌ REMOVE CART
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  // ❤️ ADD WISHLIST
  const addToWishlist = (product) => {
    const exists = wishlist.find((item) => item.id === product.id);
    if (!exists) setWishlist([...wishlist, product]);
  };

  // ❌ REMOVE WISHLIST
  const removeFromWishlist = (id) => {
    setWishlist(wishlist.filter((item) => item.id !== id));
  };

  return (
    <ShopContext.Provider
      value={{
        cart,
        wishlist,
        darkMode,
        setDarkMode,
        addToCart,
        addToWishlist,
        removeFromCart,
        removeFromWishlist,
        updateQty, // 🔥 IMPORTANT ADD THIS
      }}
    >
      {children}
    </ShopContext.Provider>
  );
}