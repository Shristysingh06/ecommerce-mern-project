export default function Cart({ cart = [], setCart }) {

  // ➖ DECREASE / INCREASE / REMOVE SAFE LOGIC
  const updateQty = (index, type) => {
    const updated = [...cart];

    if (type === "dec") {
      if (updated[index].qty > 1) {
        updated[index].qty -= 1;
      }
    }

    if (type === "inc") {
      updated[index].qty = (updated[index].qty || 1) + 1;
    }

    setCart(updated);
  };

  const removeItem = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  const total = cart.reduce((sum, item) => {
    const price = Number(item.price || 0);
    return sum + price * (item.qty || 1);
  }, 0);

  return (
    <div>
      <h1>Cart</h1>

      {cart.length === 0 ? (
        <p>Cart is Empty</p>
      ) : (
        cart.map((item, index) => (
          <div key={index} className="product-card">
            <h3>{item.name}</h3>
            <p>₹{item.price}</p>

            <div>
              <button onClick={() => updateQty(index, "dec")}>-</button>

              <span style={{ margin: "0 10px" }}>
                {item.qty || 1}
              </span>

              <button onClick={() => updateQty(index, "inc")}>+</button>
            </div>

            <button onClick={() => removeItem(index)}>
              Remove
            </button>
          </div>
        ))
      )}

      <h2>Total: ₹{total}</h2>

      <button onClick={() => setCart([])}>Clear Cart</button>
    </div>
  );
}