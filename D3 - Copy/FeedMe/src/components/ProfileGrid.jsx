// src/components/ProfileGrid.jsx
import React, { useState } from "react";
import employeesData from "../data/employees.js";
import ProfileCard from "./ProfileCard";

export default function ProfileGrid() {
  const [employees, setEmployees] = useState(employeesData);

  // Conditional rendering
  if (employees.length === 0) {
    return <p className="text-center text-gray-500">No employees found.</p>;
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Menu</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {employees.map(emp => (
          <ProfileCard key={emp.id} {...emp} />
        ))}
      </div>
    </div>
  );
}
