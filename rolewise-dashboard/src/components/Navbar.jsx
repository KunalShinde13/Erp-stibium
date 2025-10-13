import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // activate after scrolling 50px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-teal-800 shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="flex justify-between items-center px-10 text-white">
        <h1 className="text-2xl font-extrabold tracking-wide">🏠 Property Finder </h1>

        <div className="space-x-8 font-medium text-lg">
          <Link to="/" className="hover:text-teal-300 transition-colors">
            Home
          </Link>
          <Link to="/signup" className="hover:text-teal-300 transition-colors">
            Sign Up
          </Link>
          <Link to="/login" className="hover:text-teal-300 transition-colors">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}
