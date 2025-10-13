import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { Eye, EyeOff } from "lucide-react"; // 👁️ install with: npm install lucide-react

export default function SignUp() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "user",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });

    // Live validation
    if (e.target.name === "password") {
      validatePassword(e.target.value);
    }

    if (e.target.name === "confirmPassword") {
      if (form.password !== e.target.value) {
        setError("Passwords do not match!");
      } else {
        setError("");
      }
    }
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    if (!passwordRegex.test(password)) {
      setError(
        "Password must include at least one number, one lowercase letter, and one special symbol."
      );
    } else {
      setError("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    // Re-validate password before sending
    const passwordRegex = /^(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    if (!passwordRegex.test(form.password)) {
      setError(
        "Password must include at least one number, one lowercase letter, and one special symbol."
      );
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:8080/auth/signup",
        {
          username: form.username,
          email: form.email,
          password: form.password,
          role: form.role,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      if (response.status === 200 || response.status === 201) {
        alert("Signup successful!");
        navigate("/login");
      }
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Signup failed!");
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Left side - Image */}
      <div
        className="w-1/2 bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 flex flex-col justify-end h-full p-12 text-white">
          <h1 className="text-4xl font-bold mb-4">Find your sweet home</h1>
          <p className="text-lg text-gray-200">
            Schedule a visit in just a few clicks.
          </p>
        </div>
      </div>

      {/* Right side */}
      <div className="w-1/2 flex flex-col justify-center px-16 bg-gray-900 relative text-white">
        <div className="max-w-md mx-auto w-full bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-2xl shadow-2xl">
          <h2 className="text-3xl font-bold mb-2 text-white">
            Create Your Account
          </h2>
          <p className="text-gray-300 mb-8">Sign up to get started</p>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="username"
              placeholder="Username"
              onChange={handleChange}
              required
              className="w-full mb-4 p-3 bg-transparent border border-gray-400 rounded-lg text-white placeholder-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              required
              className="w-full mb-4 p-3 bg-transparent border border-gray-400 rounded-lg text-white placeholder-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
            />

            <select
              name="role"
              onChange={handleChange}
              className="w-full mb-4 p-3 bg-transparent border border-gray-400 rounded-lg text-white focus:ring-2 focus:ring-blue-500 outline-none"
            >
              <option value="user" className="text-gray-800">
                User
              </option>
              <option value="admin" className="text-gray-800">
                Admin
              </option>
            </select>

            {/* Password Field */}
            <div className="relative mb-4">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                onChange={handleChange}
                required
                className="w-full p-3 bg-transparent border border-gray-400 rounded-lg text-white placeholder-gray-300 focus:ring-2 focus:ring-blue-500 outline-none pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-gray-400 hover:text-white"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            {/* Confirm Password Field */}
            <div className="relative mb-2">
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirm Password"
                onChange={handleChange}
                required
                className="w-full p-3 bg-transparent border border-gray-400 rounded-lg text-white placeholder-gray-300 focus:ring-2 focus:ring-blue-500 outline-none pr-10"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-3 text-gray-400 hover:text-white"
              >
                {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            {/* Error message */}
            {error && (
              <p className="text-red-400 text-sm mb-4 transition-all">
                {error}
              </p>
            )}

            <button
              type="submit"
              className="bg-teal-700 text-white w-full py-3 rounded-lg font-semibold hover:bg-teal-800 transition-all"
            >
              Sign Up
            </button>
          </form>

          <p className="mt-6 text-center text-gray-300">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-blue-400 hover:underline font-semibold"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
