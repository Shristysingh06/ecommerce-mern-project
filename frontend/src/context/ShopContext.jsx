import { createContext, useState, useEffect } from "react";

export const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
  // 🛒 CART (persistent)
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  // ❤️ WISHLIST
  const [wishlist, setWishlist] = useState(() => {
    const saved = localStorage.getItem("wishlist");
    return saved ? JSON.parse(saved) : [];
  });

  // 🌙 DARK MODE
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  // 📦 ORDERS
  const [orders, setOrders] = useState([]);

  // 👤 USER LOGIN STATE
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("user");
    return saved ? JSON.parse(saved) : null;
  });

  // 💾 SAVE CART
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // 💾 SAVE WISHLIST
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  // 💾 SAVE THEME
  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  // 💾 SAVE USER
  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

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

  // ➕ INCREASE QTY
  const increaseQty = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, qty: (item.qty || 1) + 1 }
          : item
      )
    );
  };

  // ➖ DECREASE QTY
  const decreaseQty = (id) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? { ...item, qty: (item.qty || 1) - 1 }
            : item
        )
        .filter((item) => item.qty > 0)
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

  // 🌙 TOGGLE THEME
  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  // 📦 ADD ORDER
  const addOrder = (order) => {
    setOrders((prev) => [...prev, order]);
  };

  // 🔐 LOGIN (demo / frontend only)
  const login = (email, password) => {
    const fakeUser = {
      id: Date.now(),
      name: "User",
      email,
    };

    setUser(fakeUser);
  };

  // 🚪 LOGOUT
  const logout = () => {
    setUser(null);
  };

  return (
    <ShopContext.Provider
      value={{
        // states
        cart,
        wishlist,
        darkMode,
        orders,
        user,

        // setters
        setCart,
        setWishlist,
        setDarkMode,
        setUser,

        // cart
        addToCart,
        increaseQty,
        decreaseQty,
        removeFromCart,

        // wishlist
        addToWishlist,
        removeFromWishlist,

        // theme
        toggleTheme,

        // orders
        addOrder,

        // auth
        login,
        logout,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};