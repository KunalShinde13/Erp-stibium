import React from "react";
import menu from "../data/employees"; // Import menu data
import "../index.css"; // Import CSS file

export default function Team() {
  return (
    <div className="team-container">
      <h1 className="menu-title">🍕 FeedMe Menu</h1>

      <div className="table-container">
        <table className="menu-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Image</th>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Description</th>
            </tr>
          </thead>

          <tbody>
            {menu.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="menu-image"
                    onError={(e) => {
                      e.target.src =
                        "https://via.placeholder.com/80?text=No+Image";
                    }}
                  />
                </td>
                <td>{item.name}</td>
                <td>{item.category}</td>
                <td>${item.price.toFixed(2)}</td>
                <td>{item.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
