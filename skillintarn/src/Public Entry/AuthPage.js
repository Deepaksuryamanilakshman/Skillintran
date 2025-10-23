import React, { useState } from "react";
import "./AuthPage.css";

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add login/register logic here
    alert(isLogin ? "Logging in..." : "Registering...");
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h2>{isLogin ? "Login" : "Register"}</h2>

        <form className="login-form" onSubmit={handleSubmit}>
          {!isLogin && (
            <input type="text" placeholder="Full Name" required />
          )}
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          {!isLogin && (
            <input type="password" placeholder="Confirm Password" required />
          )}

          <button type="submit" className="login-btn">
            {isLogin ? "Login" : "Register"}
          </button>
        </form>

        <p className="toggle-text">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <span onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? "Register" : "Login"}
          </span>
        </p>
      </div>
    </div>
  );
}
