import { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { login } = useContext(ShopContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    login(email, password);   // 👈 yaha call hota hai
    navigate("/");
  };

  return (
    <div>
      <h2>Login</h2>

      <input placeholder="email" onChange={(e) => setEmail(e.target.value)} />
      <input placeholder="password" onChange={(e) => setPassword(e.target.value)} />

      <button onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}