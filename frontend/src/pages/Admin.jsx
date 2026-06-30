import { useState } from "react";

export default function Admin() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  const addProduct = () => {
    if (!name || !price || !image) return;

    const newProduct = {
      id: Date.now(),
      name,
      price: Number(price),
      image,
    };

    setProducts((prev) => [...prev, newProduct]);

    setName("");
    setPrice("");
    setImage("");
  };

  const removeProduct = (id) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>🛠️ Admin Panel</h1>

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

      <hr />

      {products.map((p) => (
        <div
          key={p.id}
          style={{
            border: "1px solid #ccc",
            margin: "10px",
            padding: "10px",
          }}
        >
          <img
            src={p.image}
            alt={p.name}
            style={{ width: "100px", height: "100px", objectFit: "contain" }}
          />

          <h3>{p.name}</h3>
          <p>₹{p.price}</p>

          <button onClick={() => removeProduct(p.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}