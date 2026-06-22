export default function Cart({ cart = [], setCart }) {

  const total = cart.reduce((sum, item) => {
    const price = Number(
      (item.price || "0")
        .toString()
        .replace("₹", "")
        .replace(/,/g, "")
    );

    return sum + price * (item.qty || 1);
  }, 0);

  return (
    <div>
      <h1>Cart</h1>

      {cart.length === 0 ? (
        <p>Cart is Empty</p>
      ) : (
        <>
          {cart.map((item, index) => (
            <div key={index}>
              <h3>{item.name}</h3>
              <p>{item.price || "₹0"}</p>

              <div style={{ margin: "10px 0" }}>
                <button
                  onClick={() => {
                    const updated = [...cart];

                    if (updated[index].qty > 1) {
                      updated[index].qty -= 1;
                      setCart(updated);
                    }
                  }}
                >
                  -
                </button>

                <span style={{ margin: "0 15px", fontWeight: "bold" }}>
                  {item.qty || 1}
                </span>

                <button
                  onClick={() => {
                    const updated = [...cart];
                    updated[index].qty = (updated[index].qty || 1) + 1;
                    setCart(updated);
                  }}
                >
                  +
                </button>
              </div>

              <button
                onClick={() => {
                  setCart(cart.filter((_, i) => i !== index));
                }}
              >
                Remove
              </button>

              <hr />
            </div>
          ))}

          <h2>Total: ₹{total.toLocaleString()}</h2>

          <button onClick={() => setCart([])}>
            Clear Cart
          </button>
        </>
      )}
    </div>
  );
}