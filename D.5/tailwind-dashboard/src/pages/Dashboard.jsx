// src/pages/Dashboard.jsx
import { useEffect, useState } from "react";
import Button from "../components/Button";
import Card from "../components/Card";
import Modal from "../components/Modal";

export default function Dashboard() {
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark"
  );
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6 transition-colors">
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Tailwind Dashboard</h1>
          <div className="space-x-2">
            <Button variant="neutral" onClick={() => setDarkMode(!darkMode)}>
              Toggle {darkMode ? "Light" : "Dark"} Mode
            </Button>
            <Button onClick={() => setModalOpen(true)}>Open Modal</Button>
          </div>
        </header>

        <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card title="Card 1">This is some card content.</Card>
          <Card title="Card 2">Flex, Grid & Spacing example.</Card>
          <Card title="Card 3">Dark mode and reusable components.</Card>
        </main>

        <Modal
          isOpen={isModalOpen}
          onClose={() => setModalOpen(false)}
          title="Example Modal"
        >
          <p>This modal demonstrates reusable UI components with Tailwind.</p>
        </Modal>
      </div>
    </div>
  );
}
