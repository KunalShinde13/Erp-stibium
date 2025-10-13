import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

export default function UserLayout() {
  return (
    <div className="flex">
      <Sidebar role="user" />
      <div className="flex-1 ml-64 p-6 bg-gray-50 min-h-screen">
        <Outlet /> {/* This renders nested routes like dashboard or sell-property */}
      </div>
    </div>
  );
}

