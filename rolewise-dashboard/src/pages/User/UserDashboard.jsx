import { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";

export default function UserDashboard() {
  const [user, setUser] = useState({});
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [activeSection, setActiveSection] = useState("Overview");

  // Sample data (simulate backend data for now)
  const sampleProperties = [
    { id: 1, title: "2BHK Apartment in Pune", price: 15000, type: "Rent", city: "Pune", owner: "Riya Shah" },
    { id: 2, title: "1BHK Flat in Mumbai", price: 20000, type: "Rent", city: "Mumbai", owner: "Rahul Patil" },
    { id: 3, title: "Villa in Nashik", price: 8500000, type: "Sale", city: "Nashik", owner: "Kunal Shinde" },
  ];

  const sampleBookings = [
    { id: 1, title: "Studio Flat", owner: "Riya Shah", price: 12000, status: "Confirmed" },
  ];

  // Load user and all users
  useEffect(() => {
    const current = JSON.parse(localStorage.getItem("user"));
    if (!current || current.role !== "user") window.location.href = "/login";
    setUser(current);

    const allUsers = JSON.parse(localStorage.getItem("allUsers")) || [];
    setUsers(allUsers.filter((u) => u.username !== current.username));
  }, []);

  const filteredUsers = users.filter((u) =>
    u.username.toLowerCase().includes(search.toLowerCase())
  );

  // ----- Section Renderer -----
  const renderSection = () => {
    switch (activeSection) {
      case "Overview":
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">📊 Overview</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <div className="p-4 bg-white border rounded shadow text-center">
                <h3 className="text-lg font-semibold">My Properties</h3>
                <p className="text-2xl font-bold text-[#0f234e]">2</p>
              </div>
              <div className="p-4 bg-white border rounded shadow text-center">
                <h3 className="text-lg font-semibold">My Bookings</h3>
                <p className="text-2xl font-bold text-[#0f234e]">1</p>
              </div>
              <div className="p-4 bg-white border rounded shadow text-center">
                <h3 className="text-lg font-semibold">Cities Covered</h3>
                <p className="text-2xl font-bold text-[#0f234e]">3</p>
              </div>
              <div className="p-4 bg-white border rounded shadow text-center">
                <h3 className="text-lg font-semibold">Active Listings</h3>
                <p className="text-2xl font-bold text-[#0f234e]">3</p>
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-3">Recent Properties</h3>
            <ul className="space-y-3">
              {sampleProperties.slice(0, 3).map((p) => (
                <li
                  key={p.id}
                  className="p-4 border rounded bg-white shadow-sm flex justify-between items-center"
                >
                  <div>
                    <p className="font-medium">{p.title}</p>
                    <p className="text-sm text-gray-500">
                      {p.city} • {p.type} • ₹{p.price}
                    </p>
                  </div>
                  <span className="text-sm bg-[#0f234e] text-white px-3 py-1 rounded">
                    {p.type}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        );

      case "All Properties":
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">🏠 All Properties</h2>
            <p className="text-gray-600 mb-4">
              Browse available properties listed by owners or the admin.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {sampleProperties.map((p) => (
                <div key={p.id} className="border rounded p-4 shadow bg-white">
                  <h3 className="font-semibold text-lg">{p.title}</h3>
                  <p className="text-gray-600">₹{p.price.toLocaleString()}</p>
                  <p className="text-sm text-gray-500">{p.city}</p>
                  <button className="mt-3 bg-[#0f234e] text-white px-4 py-2 rounded w-full hover:bg-[#142d66]">
                    View Details
                  </button>
                </div>
              ))}
            </div>
          </div>
        );

      case "My Bookings":
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">📅 My Bookings</h2>
            {sampleBookings.length > 0 ? (
              <table className="w-full bg-white border rounded shadow">
                <thead className="bg-[#0f234e] text-white">
                  <tr>
                    <th className="p-3 text-left">Property</th>
                    <th className="p-3 text-left">Owner</th>
                    <th className="p-3 text-left">Price</th>
                    <th className="p-3 text-left">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {sampleBookings.map((b) => (
                    <tr key={b.id} className="border-b hover:bg-gray-50">
                      <td className="p-3">{b.title}</td>
                      <td className="p-3">{b.owner}</td>
                      <td className="p-3">₹{b.price}</td>
                      <td className="p-3 text-green-600 font-semibold">
                        {b.status}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p className="text-gray-500 italic">No bookings yet.</p>
            )}
          </div>
        );

      case "Other Users":
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">👥 Other Users</h2>
            <input
              type="text"
              placeholder="Search other users..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="border p-2 mb-4 rounded w-full"
            />
            <ul className="space-y-2">
              {filteredUsers.length > 0 ? (
                filteredUsers.map((u, idx) => (
                  <li key={idx} className="p-3 border rounded bg-gray-50">
                    {u.username} ({u.role})
                  </li>
                ))
              ) : (
                <p className="text-gray-500 italic">No users found.</p>
              )}
            </ul>
          </div>
        );

      case "Profile":
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">👤 My Profile</h2>
            <div className="border rounded p-6 shadow bg-white max-w-md">
              <p><strong>Username:</strong> {user.username}</p>
              <p><strong>Role:</strong> {user.role}</p>
              <p><strong>Email:</strong> {user.email || "user@gmail.com"}</p>
              <button className="mt-4 bg-[#0f234e] text-white px-4 py-2 rounded hover:bg-[#142d66]">
                Edit Profile
              </button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="flex">
      {/* Sidebar (Fixed) */}
      <Sidebar role="user" username={user.username} />

      {/* Main Content */}
      <div className="flex-1 p-8 ml-64 bg-gray-50 min-h-screen">
        <h1 className="text-3xl font-bold mb-6">User Dashboard</h1>

        {/* Navigation Tabs */}
        <div className="flex gap-4 mb-6 flex-wrap">
          {["Overview", "All Properties", "My Bookings", "Other Users", "Profile"].map(
            (section) => (
              <button
                key={section}
                onClick={() => setActiveSection(section)}
                className={`px-4 py-2 rounded ${
                  activeSection === section
                    ? "bg-[#0f234e] text-white"
                    : "bg-white border hover:bg-gray-100"
                }`}
              >
                {section}
              </button>
            )
          )}
        </div>

        {/* Section Content */}
        {renderSection()}
      </div>
    </div>
  );
}
