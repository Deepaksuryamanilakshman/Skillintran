import React, { useState } from "react";
import CONFIG from "../config/config";
import "./CreateInternship.css";

export default function CreateInternship() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    duration: "",
    fee: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${CONFIG.BASE_URL}/api/create`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Internship Created 🎉");
        setFormData({ title: "", description: "", duration: "", fee: "" });
      } else {
        alert(data.message || "Error creating internship");
      }
    } catch (error) {
      console.error(error);
      alert("Server error, try again later");
    }
  };

  return (
    <div className="internship-page">
      <h2>Create Internship</h2>
      <form className="internship-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          required
          value={formData.title}
          onChange={handleChange}
        />
        <textarea
          name="description"
          placeholder="Description"
          required
          value={formData.description}
          onChange={handleChange}
        />
        <input
          type="text"
          name="duration"
          placeholder="Duration (e.g., 4 weeks)"
          required
          value={formData.duration}
          onChange={handleChange}
        />
        <input
          type="number"
          name="fee"
          placeholder="Fee"
          required
          value={formData.fee}
          onChange={handleChange}
        />
        <button type="submit">Create Internship</button>
      </form>
    </div>
  );
}
