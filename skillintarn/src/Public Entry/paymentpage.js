// File: PaymentPage.jsx
import React, { useEffect } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import './PaymentPage.css';
import logo from '../assets/brandlogo.png';

export default function PaymentPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const internship = location.state?.internship;

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const handlePayment = () => {
    if (!internship) return;

    const options = {
      key: "rzp_test_1234567890abcd", // 🔑 Replace with your Razorpay key
      amount: internship.fee * 100,
      currency: "INR",
      name: "Skillintarn",
      description: `Payment for ${internship.title}`,
      image: logo,
      handler: function (response) {
        alert("✅ Payment Successful! Payment ID: " + response.razorpay_payment_id);
        navigate("/myinternships");
      },
      prefill: {
        name: "User Name",
        email: "user@example.com",
        contact: "9999999999",
      },
      theme: {
        color: "#007bff",
      },
    };

    const razorpay = new window.Razorpay(options);
    razorpay.open();
  };

  if (!internship) {
    return (
      <div className="payment-root empty">
        <p>No internship selected. Go back to <span onClick={() => navigate('/availableinterships')} className="link">Internships</span>.</p>
      </div>
    );
  }

  return (
    <div className="payment-root">
      {/* Navbar */}
      <header className="nav">
        <div className="container nav-inner">
          <div className="logo-container">
            <img src={logo} alt="Skillintarn Logo" className="logo-img" />
          </div>
          <nav className="nav-links">
            <a onClick={() => navigate("/")}>Home</a>
            <a onClick={() => navigate("/availableinterships")}>Internships</a>
            <a onClick={() => navigate("/authentication")}>Login</a>
          </nav>
        </div>
      </header>

      {/* Payment Section */}
      <main className="container payment-main">
        <div className="payment-box">
          <div className="payment-left">
            <h2 className="internship-title">{internship.title}</h2>
            <p className="internship-duration">Duration: {internship.duration}</p>
            <p className="internship-desc">{internship.description}</p>
            <div className="price-box">
              <span className="price-label">Internship Fee:</span>
              <span className="price">₹{internship.fee}</span>
            </div>
            <button className="btn primary" onClick={handlePayment}>
              Pay ₹{internship.fee} Securely
            </button>
            <p className="payment-note">
              After successful payment, you’ll be redirected to your internship dashboard.
            </p>
          </div>

          <div className="payment-right">
            <div className="illustration"></div>
          </div>
        </div>
      </main>
    </div>
  );
}
