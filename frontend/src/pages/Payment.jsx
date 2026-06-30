import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

export default function Product() {
  const context = useContext(ShopContext);

  if (!context) return <h2>Loading...</h2>;

  const { addToCart, addToWishlist } = context;

  const products = [
    {
      id: 1,
      name: "iPhone 15",
      price: 79999,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/8/8e/IPhone_15_Pro.jpg",
    },
    {
      id: 2,
      name: "Samsung Galaxy S24",
      price: 69999,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Galaxy_S24_Ultra.png",
    },
    {
      id: 3,
      name: "OnePlus 12",
      price: 59999,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/6/6c/OnePlus_12.png",
    },
    {
      id: 4,
      name: "Google Pixel 8",
      price: 84999,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/3/31/Google_Pixel_8.png",
    },
    {
      id: 5,
      name: "Nothing Phone 2",
      price: 49999,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/7/7a/Nothing_Phone_2.png",
    },
    {
      id: 6,
      name: "Xiaomi 14",
      price: 54999,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/5/5c/Xiaomi_14.png",
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>📱 Products</h1>

      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {products.map((p) => (
          <div
            key={p.id}
            style={{
              border: "1px solid #ddd",
              padding: "10px",
              width: "220px",
              borderRadius: "10px",
              textAlign: "center",
            }}
          >
            <img
              src={p.image}
              alt={p.name}
              style={{
                width: "100%",
                height: "180px",
                objectFit: "contain",
                borderRadius: "8px",
              }}
              onError={(e) => {
                e.target.src = "https://via.placeholder.com/300";
              }}
            />

            <h3>{p.name}</h3>
            <p>₹{p.price}</p>

            <button onClick={() => addToCart(p)}>🛒 Add</button>
            <button onClick={() => addToWishlist(p)}>❤️ Wishlist</button>
          </div>
        ))}
      </div>
    </div>
  );
}