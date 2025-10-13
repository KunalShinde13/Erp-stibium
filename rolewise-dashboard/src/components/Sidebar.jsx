import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  FaUsers,
  FaChartBar,
  FaUserCircle,
  FaSignOutAlt,
  FaHome,
  FaBuilding,
  FaClipboardList,
  FaPlusCircle,
} from "react-icons/fa";

export default function Sidebar({ role, username }) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  // Detect active menu
  const isActive = (path) =>
    location.pathname === path
      ? "bg-blue-600 text-white"
      : "hover:bg-gray-700 text-gray-200";

  return (
    <div className="w-64 bg-gray-900 text-white min-h-screen flex flex-col p-6 shadow-xl fixed">
      {/* Header Section */}
      <div className="flex flex-col items-center mb-8 border-b border-gray-700 pb-4">
        <FaUserCircle className="text-6xl mb-2 text-gray-300" />
        <h2 className="text-2xl font-bold tracking-wide">
          {role === "admin" ? "Admin Panel" : "User Panel"}
        </h2>
        <p className="text-gray-400 text-sm mt-1">
          Welcome,{" "}
          <span className="text-blue-400 font-semibold">{username}</span> 👋
        </p>
      </div>

      {/* Navigation Menu */}
      <ul className="space-y-3 flex-1 text-base font-medium">
        {role === "admin" ? (
          <>
            {/* Admin Menu */}
            <li>
              <Link
                to="/admin/dashboard"
                className={`flex items-center space-x-3 p-3 rounded-lg transition ${isActive(
                  "/admin/dashboard"
                )}`}
              >
                <FaHome className="text-lg" /> <span>Dashboard</span>
              </Link>
            </li>

            <li>
              <Link
                to="/admin/users"
                className={`flex items-center space-x-3 p-3 rounded-lg transition ${isActive(
                  "/admin/users"
                )}`}
              >
                <FaUsers className="text-lg" /> <span>All Users</span>
              </Link>
            </li>

            <li>
              <Link
                to="/admin/properties"
                className={`flex items-center space-x-3 p-3 rounded-lg transition ${isActive(
                  "/admin/properties"
                )}`}
              >
                <FaBuilding className="text-lg" /> <span>Properties</span>
              </Link>
            </li>

            <li>
              <Link
                to="/admin/analytics"
                className={`flex items-center space-x-3 p-3 rounded-lg transition ${isActive(
                  "/admin/analytics"
                )}`}
              >
                <FaChartBar className="text-lg" /> <span>Analytics</span>
              </Link>
            </li>

            <li>
              <Link
                to="/admin/profile"
                className={`flex items-center space-x-3 p-3 rounded-lg transition ${isActive(
                  "/admin/profile"
                )}`}
              >
                <FaUserCircle className="text-lg" /> <span>Profile</span>
              </Link>
            </li>
          </>
        ) : (
          <>
            {/* User Menu */}
            <li>
              <Link
                to="/user/dashboard"
                className={`flex items-center space-x-3 p-3 rounded-lg transition ${isActive(
                  "/user/dashboard"
                )}`}
              >
                <FaHome className="text-lg" /> <span>Dashboard</span>
              </Link>
            </li>

            <li>
              <Link
                to="/user/sell-property"
                className={`flex items-center space-x-3 p-3 rounded-lg transition ${isActive(
                  "/user/sell-property"
                )}`}
              >
                <FaPlusCircle className="text-lg" /> <span>Sell / Rent Property</span>
              </Link>
            </li>

            <li>
              <Link
                to="/user/my-bookings"
                className={`flex items-center space-x-3 p-3 rounded-lg transition ${isActive(
                  "/user/my-bookings"
                )}`}
              >
                <FaClipboardList className="text-lg" /> <span>My Bookings</span>
              </Link>
            </li>

            <li>
              <Link
                to="/user/other-properties"
                className={`flex items-center space-x-3 p-3 rounded-lg transition ${isActive(
                  "/user/other-properties"
                )}`}
              >
                <FaBuilding className="text-lg" /> <span>Other Users’ Properties</span>
              </Link>
            </li>

            <li>
              <Link
                to="/user/profile"
                className={`flex items-center space-x-3 p-3 rounded-lg transition ${isActive(
                  "/user/profile"
                )}`}
              >
                <FaUserCircle className="text-lg" /> <span>Profile</span>
              </Link>
            </li>
          </>
        )}
      </ul>

      {/* Logout Button */}
      <button
        onClick={handleLogout}
        className="mt-auto flex items-center justify-center space-x-2 bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg transition"
      >
        <FaSignOutAlt /> <span>Logout</span>
      </button>
    </div>
  );
}
