import { createContext, useState } from "react";

export const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const [orders, setOrders] = useState([]);

  // 🛒 ADD TO CART
  const addToCart = (product) => {
    setCart((prev) => {
      const exists = prev.find((item) => item.id === product.id);

      if (exists) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, qty: (item.qty || 1) + 1 }
            : item
        );
      }

      return [...prev, { ...product, qty: 1 }];
    });
  };

  // ➕➖ UPDATE QTY
  const updateQty = (id, type) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              qty:
                type === "inc"
                  ? (item.qty || 1) + 1
                  : item.qty > 1
                  ? item.qty - 1
                  : 1,
            }
          : item
      )
    );
  };

  // ❌ REMOVE FROM CART
  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  // ❤️ ADD TO WISHLIST
  const addToWishlist = (product) => {
    setWishlist((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (!exists) return [...prev, product];
      return prev;
    });
  };

  // ❌ REMOVE WISHLIST
  const removeFromWishlist = (id) => {
    setWishlist((prev) => prev.filter((item) => item.id !== id));
  };

  // 📦 ADD ORDER (for checkout)
  const addOrder = (order) => {
    setOrders((prev) => [...prev, order]);
  };

  return (
    <ShopContext.Provider
      value={{
        // states
        cart,
        setCart, // ✅ IMPORTANT (checkout clear cart)
        wishlist,
        darkMode,
        setDarkMode,
        orders,

        // cart functions
        addToCart,
        updateQty,
        removeFromCart,

        // wishlist
        addToWishlist,
        removeFromWishlist,

        // orders
        addOrder,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};