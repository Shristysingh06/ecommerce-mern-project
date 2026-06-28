import { useState, useContext } from "react";
import { ShopContext } from "../context/ShopContext";

import iphone from "../assets/iphone.jpg";
import samsung from "../assets/Samsung.jpg";
import oneplus from "../assets/Oneplus.jpg";
import nothing from "../assets/nothing.jpg";
import pixel from "../assets/pixel.jpg";

export default function Product() {
  const [search, setSearch] = useState("");

  const { setCart, setWishlist } = useContext(ShopContext);

  const products = [
    { name: "iPhone 15", price: 79999, image: iphone },
    { name: "Samsung Galaxy S24", price: 69999, image: samsung },
    { name: "OnePlus 13", price: 59999, image: oneplus },
    { name: "Nothing Phone 3", price: 49999, image: nothing },
    { name: "Google Pixel 10", price: 84999, image: pixel },
  ];

  return (
    <div>
      <h1>🛍️ Products</h1>

      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="products-container">
        {products
          .filter((item) =>
            item.name.toLowerCase().includes(search.toLowerCase())
          )
          .map((item, index) => (
            <div key={index} className="product-card">
              <img src={item.image} alt={item.name} className="product-img" />

              <h3>{item.name}</h3>
              <p>₹{item.price}</p>

              {/* 🛒 ADD TO CART */}
              <button
                className="btn-cart"
                onClick={() => {
                  setCart((prev) => {
                    const exists = prev.find((p) => p.name === item.name);

                    if (exists) {
                      return prev.map((p) =>
                        p.name === item.name
                          ? { ...p, qty: (p.qty || 1) + 1 }
                          : p
                      );
                    }

                    return [...prev, { ...item, qty: 1 }];
                  });
                }}
              >
                🛒 Add to Cart
              </button>

              {/* ❤️ WISHLIST (FIXED - NO DUPLICATES) */}
              <button
                className="btn-wishlist"
                onClick={() => {
                  setWishlist((prev) => {
                    const exists = prev.find((p) => p.name === item.name);
                    if (exists) return prev;
                    return [...prev, item];
                  });
                }}
              >
                ❤️ Wishlist
              </button>
            </div>
          ))}
      </div>
    </div>
  );
}