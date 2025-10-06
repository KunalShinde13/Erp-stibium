// src/components/ui/Button.jsx
import React from "react";

export default function Button({ children, onClick, variant = "primary" }) {
  const base = "px-4 py-2 rounded-md font-medium transition focus:ring-2 focus:outline-none";
  const styles = {
    primary: "bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-500",
    secondary: "bg-gray-100 text-gray-800 hover:bg-gray-200 focus:ring-gray-400",
  };

  return (
    <button onClick={onClick} className={`${base} ${styles[variant]}`}>
      {children}
    </button>
  );
}
