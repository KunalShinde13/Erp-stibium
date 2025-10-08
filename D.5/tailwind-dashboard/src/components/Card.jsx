// src/components/Card.jsx
export default function Card({ title, children }) {
  return (
    <div className="bg-white dark:bg-gray-800 dark:text-gray-100 shadow p-4 rounded-xl transition-colors">
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <div>{children}</div>
    </div>
  );
}
