import React, { useEffect, useState } from "react";
import axios from "axios";

export default function UserExplorer() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [useAxios, setUseAxios] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);
  const [sortBy, setSortBy] = useState("");

  // Fetch users
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        let data;
        if (useAxios) {
          const response = await axios.get(
            "https://jsonplaceholder.typicode.com/users"
          );
          data = response.data;
        } else {
          const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
          );
          if (!response.ok) throw new Error("Network error");
          data = await response.json();
        }
        setUsers(data);
      } catch {
        setError("Failed to fetch users 😢");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [useAxios]);

  // Filter & sort
  const filteredUsers = users.filter((u) =>
    u.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedUsers = [...filteredUsers].sort((a, b) => {
    if (sortBy === "name") return a.name.localeCompare(b.name);
    if (sortBy === "username") return a.username.localeCompare(b.username);
    if (sortBy === "email") return a.email.localeCompare(b.email);
    return 0;
  });

  if (loading) return <p style={{ textAlign: "center" }}>Loading users...</p>;
  if (error) return <p style={{ textAlign: "center" }}>{error}</p>;

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center", color: "#0077cc" }}>
        User Explorer Dashboard
      </h1>

      {/* Axios/Fetch */}
      <div style={{ textAlign: "center", margin: "10px 0" }}>
        <button
          onClick={() => setUseAxios(true)}
          disabled={useAxios}
          style={buttonStyle}
        >
          Use Axios
        </button>
        <button
          onClick={() => setUseAxios(false)}
          disabled={!useAxios}
          style={{ ...buttonStyle, marginLeft: "10px" }}
        >
          Use Fetch
        </button>
      </div>

      {/* Search */}
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            padding: "8px 12px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            width: "60%",
            maxWidth: "400px",
          }}
        />
      </div>

      {/* Sort */}
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <button onClick={() => setSortBy("name")} style={buttonStyle}>
          Sort by Name
        </button>
        <button
          onClick={() => setSortBy("username")}
          style={{ ...buttonStyle, marginLeft: "5px" }}
        >
          Sort by Username
        </button>
        <button
          onClick={() => setSortBy("email")}
          style={{ ...buttonStyle, marginLeft: "5px" }}
        >
          Sort by Email
        </button>
      </div>

      {/* Stats */}
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <span style={badgeStyle}>Total Users: {users.length}</span>
        <span style={badgeStyle}>
          Companies: {new Set(users.map((u) => u.company.name)).size}
        </span>
        <span style={badgeStyle}>
          Cities: {new Set(users.map((u) => u.address.city)).size}
        </span>
      </div>

      {/* User Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "20px",
        }}
      >
        {sortedUsers.length > 0 ? (
          sortedUsers.map((user) => (
            <div
              key={user.id}
              onClick={() =>
                setSelectedUser(selectedUser?.id === user.id ? null : user)
              }
              style={{
                padding: "15px",
                borderRadius: "12px",
                backgroundColor: selectedUser?.id === user.id ? "#e0f7fa" : "#fff",
                boxShadow: "0 3px 10px rgba(0,0,0,0.1)",
                cursor: "pointer",
                transition: "0.3s",
                border: "1px solid #ddd",
              }}
            >
              <h3 style={{ margin: "0 0 8px 0" }}>{user.name}</h3>
              <p style={{ margin: "0 0 5px 0", color: "#555" }}>
                📧 {user.email}
              </p>
              <span
                style={{
                  ...smallBadgeStyle,
                  backgroundColor: "#ffe0b2",
                  marginRight: "5px",
                }}
              >
                🏢 {user.company.name}
              </span>
              <span style={{ ...smallBadgeStyle, backgroundColor: "#c8e6c9" }}>
                🏠 {user.address.city}
              </span>

              {selectedUser?.id === user.id && (
                <div style={{ marginTop: "10px", textAlign: "left" }}>
                  <p>Username: {user.username}</p>
                  <p>Phone: {user.phone}</p>
                  <p>
                    Website:{" "}
                    <a href={`http://${user.website}`} target="_blank">
                      {user.website}
                    </a>
                  </p>
                  <p>Address: {user.address.suite}, {user.address.street}, {user.address.city} - {user.address.zipcode}</p>
                </div>
              )}
            </div>
          ))
        ) : (
          <p>No users found.</p>
        )}
      </div>
    </div>
  );
}

// Button style
const buttonStyle = {
  padding: "8px 14px",
  borderRadius: "6px",
  border: "none",
  backgroundColor: "#0077cc",
  color: "#fff",
  cursor: "pointer",
};

// Badge style
const badgeStyle = {
  display: "inline-block",
  backgroundColor: "#e1f5fe",
  color: "#0277bd",
  padding: "5px 10px",
  borderRadius: "12px",
  margin: "0 5px",
};

// Small badge
const smallBadgeStyle = {
  display: "inline-block",
  padding: "3px 8px",
  borderRadius: "8px",
  color: "#555",
  fontSize: "12px",
  marginTop: "5px",
};
