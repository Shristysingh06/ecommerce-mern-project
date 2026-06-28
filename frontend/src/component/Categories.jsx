import { Link } from "react-router-dom";

export default function Categories() {
  const categories = [
    { name: "iPhone", path: "/products" },
    { name: "Samsung", path: "/products" },
    { name: "OnePlus", path: "/products" },
    { name: "Google Pixel", path: "/products" },
    { name: "Nothing", path: "/products" },
  ];

  return (
    <div style={{ marginTop: "30px" }}>
      <h2>📱 Categories</h2>

      <div
        style={{
          display: "flex",
          gap: "15px",
          flexWrap: "wrap",
          marginTop: "15px",
        }}
      >
        {categories.map((cat, index) => (
          <Link
            key={index}
            to={cat.path}
            style={{
              padding: "15px 20px",
              border: "1px solid #ddd",
              borderRadius: "10px",
              textDecoration: "none",
              color: "black",
              background: "#f9f9f9",
              flex: "1",
              textAlign: "center",
              minWidth: "120px",
            }}
          >
            {cat.name}
          </Link>
        ))}
      </div>
    </div>
  );
}