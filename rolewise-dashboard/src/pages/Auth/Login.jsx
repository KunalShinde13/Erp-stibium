import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react"; // 👁️ install if not done: npm install lucide-react

export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await axios.post("http://localhost:8080/auth/signin", form, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });

      if (res.data) {
        alert(`Welcome ${res.data.username}!`);
        localStorage.setItem("user", JSON.stringify(res.data));

        // ✅ Navigate based on role
        if (res.data.role === "admin") {
          navigate("/admin/dashboard");
        } else {
          navigate("/user/dashboard");
        }
      }
    } catch (err) {
      console.error(err);
      setError("Invalid username or password!");
    }
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center relative"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Login Form */}
      <div className="relative z-10 bg-white/10 backdrop-blur-md border border-white/30 p-8 rounded-2xl shadow-2xl w-96 text-white">
        <h2 className="text-3xl font-bold mb-6 text-center">Log In</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={handleChange}
            required
            className="w-full mb-4 p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 border border-white/30 focus:ring-2 focus:ring-blue-400 outline-none"
          />

          {/* Password Field with Eye Icon */}
          <div className="relative mb-4">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 border border-white/30 focus:ring-2 focus:ring-blue-400 outline-none pr-10"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3 text-gray-300 hover:text-white"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-teal-600 hover:bg-teal-700 py-3 rounded-lg font-semibold text-white transition-all"
          >
            Log In
          </button>

          {error && <p className="mt-3 text-red-400 text-center">{error}</p>}

          <div className="flex justify-between items-center mt-4 text-sm">
            <button
              type="button"
              onClick={() => navigate("/forgot-password")}
              className="text-blue-300 hover:underline"
            >
              Forgot Password?
            </button>
            <Link
              to="/signup"
              className="text-blue-300 hover:underline font-medium"
            >
              Sign Up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
