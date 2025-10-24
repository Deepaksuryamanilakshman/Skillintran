import React, { useState } from "react";
import "./AuthPage.css";
import CONFIG  from "../config/config";

export default function LoginPage() {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${CONFIG.BASE_URL}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Login Successful ✅");
        localStorage.setItem("userToken", data.token);
        window.location.href = "/"; // redirect after login
      } else {
        alert(data.message || "Invalid credentials");
      }
    } catch (error) {
      console.error(error);
      alert("Server error, please try again later");
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2>Login</h2>

        <form className="auth-form" onSubmit={handleSubmit}>
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

          <button type="submit" className="auth-btn">
            Login
          </button>
        </form>

        <p className="toggle-text">
          Don’t have an account?{" "}
          <a href="/register">Register here</a>
        </p>
      </div>
    </div>
  );
}
