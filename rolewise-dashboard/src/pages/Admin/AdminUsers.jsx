import { useEffect, useState } from "react";

export default function AdminUsers() {
  const [users, setUsers] = useState([]);

  // Fetch users from localStorage on load
  useEffect(() => {
    const allUsers = JSON.parse(localStorage.getItem("allUsers")) || [];
    setUsers(allUsers);
  }, []);

  // Delete user
  const handleDelete = (username) => {
    if (window.confirm(`Are you sure you want to delete ${username}?`)) {
      const updated = users.filter((u) => u.username !== username);
      setUsers(updated);
      localStorage.setItem("allUsers", JSON.stringify(updated));
    }
  };

  // Edit user
  const handleEdit = (index) => {
    const newEmail = prompt("Enter new email:", users[index].email);
    if (newEmail) {
      const updated = [...users];
      updated[index].email = newEmail;
      setUsers(updated);
      localStorage.setItem("allUsers", JSON.stringify(updated));
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">All Registered Users</h1>

      {users.length === 0 ? (
        <p className="text-gray-500 text-lg">No users found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-300 shadow-md rounded-lg overflow-hidden">
            <thead className="bg-gray-200">
              <tr>
                <th className="border p-3 text-left">Username</th>
                <th className="border p-3 text-left">Email</th>
                <th className="border p-3 text-left">Role</th>
                <th className="border p-3 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((u, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="border p-3">{u.username}</td>
                  <td className="border p-3">{u.email}</td>
                  <td className="border p-3 capitalize">{u.role}</td>
                  <td className="border p-3 text-center space-x-3">
                    <button
                      onClick={() => handleEdit(index)}
                      className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded text-sm"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(u.username)}
                      className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded text-sm"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
