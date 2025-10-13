import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminDashboard() {
  const [users, setUsers] = useState([]);
  const [properties, setProperties] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const current = JSON.parse(localStorage.getItem("user"));

    // Redirect if not an admin
    if (!current || current.role !== "admin") {
      navigate("/login");
      return;
    }

    // Load all users except the current admin
    const allUsers = JSON.parse(localStorage.getItem("allUsers")) || [];
    const filteredUsers = current?.username
      ? allUsers.filter((u) => u.username !== current.username)
      : allUsers;
    setUsers(filteredUsers);

    // Load all property data
    const allProps = JSON.parse(localStorage.getItem("allProperties")) || [];
    setProperties(allProps);
  }, [navigate]);

  return (
    <div>
      {/* Page Title */}
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        Admin Dashboard
      </h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <div className="bg-white shadow-lg p-6 rounded-xl text-center">
          <h2 className="text-2xl font-bold text-blue-600">{users.length}</h2>
          <p className="text-gray-500 mt-1">Total Users</p>
        </div>

        <div className="bg-white shadow-lg p-6 rounded-xl text-center">
          <h2 className="text-2xl font-bold text-green-600">
            {properties.length}
          </h2>
          <p className="text-gray-500 mt-1">Total Properties</p>
        </div>

        <div className="bg-white shadow-lg p-6 rounded-xl text-center">
          <h2 className="text-2xl font-bold text-orange-600">
            {
              properties.filter(
                (p) => p.status === "Pending" || p.status === "pending"
              ).length
            }
          </h2>
          <p className="text-gray-500 mt-1">Pending Approvals</p>
        </div>

        <div className="bg-white shadow-lg p-6 rounded-xl text-center">
          <h2 className="text-2xl font-bold text-purple-600">
            {new Set(properties.map((p) => p.city)).size || 0}
          </h2>
          <p className="text-gray-500 mt-1">Cities Covered</p>
        </div>
      </div>

      {/* Users Table */}
      <h3 className="text-xl font-semibold mb-3 text-gray-700">
        👥 All Registered Users
      </h3>
      <div className="overflow-x-auto bg-white shadow-md rounded-lg mb-10">
        <table className="w-full text-left border-collapse">
          <thead className="bg-gray-200 text-gray-700 uppercase text-sm">
            <tr>
              <th className="border p-3">Username</th>
              <th className="border p-3">Email</th>
              <th className="border p-3">City</th>
              <th className="border p-3">Role</th>
            </tr>
          </thead>
          <tbody>
            {users.length > 0 ? (
              users.map((u, idx) => (
                <tr
                  key={idx}
                  className="hover:bg-gray-100 transition-colors duration-150"
                >
                  <td className="border p-3">{u.username}</td>
                  <td className="border p-3">{u.email}</td>
                  <td className="border p-3">{u.city || "—"}</td>
                  <td className="border p-3 capitalize">{u.role}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="4"
                  className="border p-3 text-center text-gray-500"
                >
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Properties Table */}
      <h3 className="text-xl font-semibold mb-3 text-gray-700">
        🏡 All Property Listings
      </h3>
      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
        <table className="w-full text-left border-collapse">
          <thead className="bg-gray-200 text-gray-700 uppercase text-sm">
            <tr>
              <th className="border p-3">Title</th>
              <th className="border p-3">City</th>
              <th className="border p-3">Price</th>
              <th className="border p-3">Owner</th>
              <th className="border p-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {properties.length > 0 ? (
              properties.map((p, idx) => (
                <tr
                  key={idx}
                  className="hover:bg-gray-100 transition-colors duration-150"
                >
                  <td className="border p-3">{p.title}</td>
                  <td className="border p-3">{p.city}</td>
                  <td className="border p-3">₹{p.price}</td>
                  <td className="border p-3">{p.owner}</td>
                  <td className="border p-3 capitalize">
                    {p.status || "Approved"}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="5"
                  className="border p-3 text-center text-gray-500"
                >
                  No property listings yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
