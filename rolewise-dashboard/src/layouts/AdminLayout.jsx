import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

export default function AdminLayout() {
  const admin = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar stays fixed */}
      <Sidebar role="admin" username={admin?.username} />

      {/* Right content changes dynamically */}
      <div className="flex-1 p-8 overflow-y-auto">
        <Outlet /> {/* This renders whichever admin page is active */}
      </div>
    </div>
  );
}
