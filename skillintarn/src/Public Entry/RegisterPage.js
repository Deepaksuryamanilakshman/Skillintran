import React, { useState } from "react";
import "./AuthPage.css";
import CONFIG  from "../config/config";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
        const res = await fetch(`${CONFIG.BASE_URL}/api/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Registration Successful 🎉");
        localStorage.setItem("userToken", data.token);
        window.location.href = "/"; // redirect after register
      } else {
        alert(data.message || "Registration failed");
      }
    } catch (error) {
      console.error(error);
      alert("Server error, please try again later");
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2>Register</h2>

        <form className="auth-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            value={formData.password}
            onChange={handleChange}
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            required
            value={formData.confirmPassword}
            onChange={handleChange}
          />

          <button type="submit" className="auth-btn">
            Register
          </button>
        </form>

        <p className="toggle-text">
          Already have an account?{" "}
          <a href="/login">Login here</a>
        </p>
      </div>
    </div>
  );
}
