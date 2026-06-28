import { useState, useContext } from "react";
import { ShopContext } from "../context/ShopContext";

import iphone from "../assets/iphone.jpg";
import samsung from "../assets/Samsung.jpg";
import oneplus from "../assets/Oneplus.jpg";
import nothing from "../assets/nothing.jpg";
import pixel from "../assets/pixel.jpg";

export default function Product() {
  const [search, setSearch] = useState("");

  // ✅ CONTEXT FUNCTIONS (IMPORTANT FIX)
  const { addToCart, addToWishlist } = useContext(ShopContext);

  const products = [
    { id: 1, name: "iPhone 15", price: 79999, image: iphone },
    { id: 2, name: "Samsung Galaxy S24", price: 69999, image: samsung },
    { id: 3, name: "OnePlus 13", price: 59999, image: oneplus },
    { id: 4, name: "Nothing Phone 3", price: 49999, image: nothing },
    { id: 5, name: "Google Pixel 10", price: 84999, image: pixel },
  ];

  return (
    <div>
      <h1>🛍️ Products</h1>

      {/* SEARCH */}
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
          .map((item) => (
            <div key={item.id} className="product-card">
              <img
                src={item.image}
                alt={item.name}
                className="product-img"
              />

              <h3>{item.name}</h3>
              <p>₹{item.price}</p>

              {/* 🛒 ADD TO CART */}
              <button
                className="btn-cart"
                onClick={() => addToCart(item)}
              >
                🛒 Add to Cart
              </button>

              {/* ❤️ ADD TO WISHLIST */}
              <button
                className="btn-wishlist"
                onClick={() => addToWishlist(item)}
              >
                ❤️ Wishlist
              </button>
            </div>
          ))}
      </div>
    </div>
  );
}