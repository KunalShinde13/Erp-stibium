import { useState } from "react";
import axios from "axios";

export default function SellProperty() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    city: "",
    type: "Rent",
    address: "",
    imageUrl: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      // Here you’ll later send data to backend API
      // Example:
      // await axios.post("http://localhost:8080/api/properties", formData);

      console.log("Property submitted:", formData);
      setMessage("✅ Property listed successfully!");
      setFormData({
        title: "",
        description: "",
        price: "",
        city: "",
        type: "Rent",
        address: "",
        imageUrl: "",
      });
    } catch (error) {
      console.error(error);
      setMessage("❌ Failed to list property.");
    }
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold mb-6 text-[#0f234e]">🏡 Sell / Rent Your Property</h2>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-2xl shadow-md max-w-2xl mx-auto space-y-4"
      >
        <input
          type="text"
          name="title"
          placeholder="Property Title"
          value={formData.title}
          onChange={handleChange}
          required
          className="w-full border p-3 rounded-lg"
        />
        <textarea
          name="description"
          placeholder="Property Description"
          value={formData.description}
          onChange={handleChange}
          rows="3"
          className="w-full border p-3 rounded-lg"
        />
        <div className="grid grid-cols-2 gap-4">
          <input
            type="number"
            name="price"
            placeholder="Price"
            value={formData.price}
            onChange={handleChange}
            required
            className="border p-3 rounded-lg w-full"
          />
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="border p-3 rounded-lg w-full"
          >
            <option value="Rent">Rent</option>
            <option value="Sale">Sale</option>
          </select>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
            className="border p-3 rounded-lg w-full"
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            className="border p-3 rounded-lg w-full"
          />
        </div>
        <input
          type="text"
          name="imageUrl"
          placeholder="Image URL"
          value={formData.imageUrl}
          onChange={handleChange}
          className="border p-3 rounded-lg w-full"
        />

        <button
          type="submit"
          className="bg-[#0f234e] text-white w-full py-3 rounded-lg hover:bg-[#142d66] transition"
        >
          Submit Property
        </button>

        {message && (
          <p className="text-center text-green-600 font-semibold mt-4">{message}</p>
        )}
      </form>
    </div>
  );
}
