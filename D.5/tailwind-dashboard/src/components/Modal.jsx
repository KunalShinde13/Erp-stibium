// src/components/Modal.jsx
import { useEffect } from "react";
import Button from "./Button";

export default function Modal({ isOpen, onClose, title, children }) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg max-w-md w-full">
        <h3 className="text-xl font-semibold mb-4">{title}</h3>
        <div>{children}</div>
        <div className="mt-4 text-right">
          <Button variant="neutral" onClick={onClose}>Close</Button>
        </div>
      </div>
    </div>
  );
}
