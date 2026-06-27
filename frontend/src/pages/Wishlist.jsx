export default function Wishlist({
  wishlist = [],
  setWishlist,
  setCart,
}) {
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

    // remove from wishlist
    setWishlist((prev) =>
      prev.filter((p) => p.name !== item.name)
    );
  };

  // ❌ REMOVE FROM WISHLIST
  const removeFromWishlist = (item) => {
    setWishlist((prev) =>
      prev.filter((p) => p.name !== item.name)
    );
  };

  return (
    <div>
      <h1>Wishlist ❤️</h1>

      {wishlist.length === 0 ? (
        <p>Wishlist is Empty</p>
      ) : (
        wishlist.map((item, index) => (
          <div key={index}>
            <h3>{item.name}</h3>
            <p>{item.price}</p>

            {/* MOVE TO CART */}
            <button onClick={() => moveToCart(item)}>
              Move to Cart 🛒
            </button>

            {/* REMOVE */}
            <button
              onClick={() => removeFromWishlist(item)}
              style={{ marginLeft: "10px" }}
            >
              Remove ❌
            </button>

            <hr />
          </div>
        ))
      )}
    </div>
  );
}