// src/components/Button.jsx
import clsx from "clsx";

export default function Button({ children, variant = "primary", onClick }) {
  const base = "px-4 py-2 rounded-xl font-semibold transition";
  const styles = clsx(base, {
    "bg-primary text-white hover:bg-indigo-600": variant === "primary",
    "bg-secondary text-white hover:bg-amber-500": variant === "secondary",
    "bg-gray-200 text-gray-800 hover:bg-gray-300": variant === "neutral",
  });

  return <button className={styles} onClick={onClick}>{children}</button>;
}
