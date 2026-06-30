import { useState, useEffect } from "react";

export default function Admin() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  // 📦 GET PRODUCTS FROM BACKEND
  const fetchProducts = async () => {
    const res = await fetch("http://localhost:5000/api/products");
    const data = await res.json();
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // ➕ ADD PRODUCT (DB)
  const addProduct = async () => {
    if (!name || !price || !image) return;

    await fetch("http://localhost:5000/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        price,
        image,
      }),
    });

    setName("");
    setPrice("");
    setImage("");

    fetchProducts();
  };

  // ❌ DELETE PRODUCT (DB)
  const removeProduct = async (id) => {
    await fetch(`http://localhost:5000/api/products/${id}`, {
      method: "DELETE",
    });

    fetchProducts();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>🛠️ Admin Dashboard (DB Connected)</h1>

      {/* FORM */}
      <div style={{ marginBottom: "20px" }}>
        <input
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <input
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />

        <button onClick={addProduct}>Add Product</button>
      </div>

      <hr />

      {/* PRODUCTS LIST */}
      {products.map((p) => (
        <div
          key={p._id}
          style={{
            border: "1px solid #ccc",
            margin: "10px",
            padding: "10px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <img
            src={p.image}
            alt={p.name}
            style={{ width: "80px", height: "80px", objectFit: "contain" }}
          />

          <div>
            <h3>{p.name}</h3>
            <p>₹{p.price}</p>
          </div>

          <button
            onClick={() => removeProduct(p._id)}
            style={{ background: "red", color: "white" }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}