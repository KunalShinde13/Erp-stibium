import React, { useState } from "react";
import "../index.css";

export default function FeedbackForm() {
  const [form, setForm] = useState({ name: "", email: "", rating: "", message: "" });
  const [submitted, setSubmitted] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.rating || !form.message) {
      setSubmitted({ success: false, message: "Please fill all required fields." });
      return;
    }
    setSubmitted({ success: true, message: "Thank you for your feedback!" });
    setForm({ name: "", email: "", rating: "", message: "" });
  };

  return (
    <div className="feedback-container">
      <h2 className="feedback-title">🍽️ FeedMe Feedback Form</h2>

      {submitted && (
        <div
          className={`feedback-alert ${submitted.success ? "success" : "error"}`}
        >
          {submitted.message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="feedback-form">
        <div className="form-row">
          <label>
            Name<span>*</span>
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter your name"
          />
        </div>

        <div className="form-row">
          <label>
            Email<span>*</span>
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
        </div>

        <div className="form-row">
          <label>
            Rating<span>*</span>
          </label>
          <select
            name="rating"
            value={form.rating}
            onChange={handleChange}
          >
            <option value="">Select Rating</option>
            <option value="5">⭐⭐⭐⭐⭐ Excellent</option>
            <option value="4">⭐⭐⭐⭐ Good</option>
            <option value="3">⭐⭐⭐ Average</option>
            <option value="2">⭐⭐ Poor</option>
            <option value="1">⭐ Terrible</option>
          </select>
        </div>

        <div className="form-row">
          <label>
            Message<span>*</span>
          </label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Write your feedback..."
            rows="4"
          />
        </div>

        <div className="feedback-buttons">
          <button type="submit" className="btn-submit">
            Submit Feedback
          </button>
          <button
            type="button"
            onClick={() =>
              setForm({ name: "", email: "", rating: "", message: "" })
            }
            className="btn-reset"
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}
