import { useState, useContext } from "react";
import { ShopContext } from "../context/ShopContext";

import iphone from "../assets/iphone.jpg";
import samsung from "../assets/Samsung.jpg";
import oneplus from "../assets/Oneplus.jpg";
import nothing from "../assets/nothing.jpg";
import pixel from "../assets/pixel.jpg";

export default function Product() {
  const [search, setSearch] = useState("");
  const { addToCart, addToWishlist } = useContext(ShopContext);

  const products = [
    { id: 1, name: "iPhone 15", price: 79999, image: iphone },
    { id: 2, name: "Samsung Galaxy S24", price: 69999, image: samsung },
    { id: 3, name: "OnePlus 13", price: 59999, image: oneplus },
    { id: 4, name: "Nothing Phone 3", price: 49999, image: nothing },
    { id: 5, name: "Google Pixel 10", price: 84999, image: pixel },
  ];

  const filteredProducts = products.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "20px" }}>
      <h1>🛍️ Products</h1>

      {/* SEARCH */}
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: "10px",
          width: "100%",
          marginBottom: "20px",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}
      />

      {/* GRID */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "20px",
        }}
      >
        {filteredProducts.length === 0 ? (
          <p>No products found 😢</p>
        ) : (
          filteredProducts.map((item) => (
            <div
              key={item.id}
              style={{
                border: "1px solid #eee",
                borderRadius: "12px",
                padding: "15px",
                textAlign: "center",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                transition: "0.3s",
              }}
            >
              {/* IMAGE */}
              <img
                src={item.image}
                alt={item.name}
                style={{
                  width: "100%",
                  height: "180px",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
              />

              {/* NAME */}
              <h3 style={{ margin: "10px 0" }}>{item.name}</h3>

              {/* PRICE */}
              <p style={{ fontWeight: "bold" }}>₹{item.price}</p>

              {/* BUTTONS */}
              <button
                onClick={() => addToCart(item)}
                style={{
                  padding: "8px 12px",
                  margin: "5px",
                  background: "black",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                🛒 Add to Cart
              </button>

              <button
                onClick={() => addToWishlist(item)}
                style={{
                  padding: "8px 12px",
                  margin: "5px",
                  background: "crimson",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                ❤️ Wishlist
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}