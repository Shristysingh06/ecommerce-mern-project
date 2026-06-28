import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

export default function Wishlist() {
  const { wishlist, setWishlist, setCart } = useContext(ShopContext);

  // 🛒 MOVE TO CART
  const moveToCart = (item) => {
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

    setWishlist((prev) =>
      prev.filter((p) => p.name !== item.name)
    );
  };

  // ❌ REMOVE FROM WISHLIST
  const removeItem = (item) => {
    setWishlist((prev) =>
      prev.filter((p) => p.name !== item.name)
    );
  };

  return (
    <div>
      <h1>❤️ Wishlist</h1>

      {wishlist.length === 0 ? (
        <p>Wishlist is empty 😢</p>
      ) : (
        wishlist.map((item, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ddd",
              padding: "12px",
              margin: "10px",
              borderRadius: "10px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {/* PRODUCT INFO */}
            <div>
              <h3>{item.name}</h3>
              <p>₹{item.price}</p>
            </div>

            {/* ACTION BUTTONS */}
            <div>
              <button
                onClick={() => moveToCart(item)}
                style={{ marginRight: "10px" }}
              >
                🛒 Move to Cart
              </button>

              <button
                onClick={() => removeItem(item)}
                style={{
                  background: "red",
                  color: "white",
                }}
              >
                Remove ❌
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}