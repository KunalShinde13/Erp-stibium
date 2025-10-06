// src/components/ProfileCard.jsx
import React from "react";

export default function ProfileCard({ name, role, email, avatar }) {
  return (
    <div className="bg-white shadow-sm rounded-lg p-4 hover:shadow-md transition">
      <div className="flex items-center gap-4">
        <img src={avatar} alt={name} className="w-14 h-14 rounded-full object-cover" />
        <div>
          <h3 className="font-semibold text-lg">{name}</h3>
          <p className="text-gray-500 text-sm">{role}</p>
          <a href={`mailto:${email}`} className="text-indigo-600 text-sm hover:underline">{email}</a>
        </div>
      </div>
    </div>
  );
}
