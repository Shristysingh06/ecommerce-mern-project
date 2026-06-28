import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

export default function Wishlist() {
  const { wishlist, removeFromWishlist, addToCart } =
    useContext(ShopContext);

  // 🛒 MOVE TO CART
  const moveToCart = (item) => {
    addToCart(item);
    removeFromWishlist(item.id);
  };

  return (
    <div>
      <h1>❤️ Wishlist</h1>

      {wishlist.length === 0 ? (
        <h3 style={{ textAlign: "center" }}>
          Wishlist is empty 😢
        </h3>
      ) : (
        wishlist.map((item) => (
          <div
            key={item.id}
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
                onClick={() => removeFromWishlist(item.id)}
                style={{
                  background: "red",
                  color: "white",
                  border: "none",
                  padding: "5px 10px",
                  borderRadius: "5px",
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