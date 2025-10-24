// File: AvailableInternships.jsx
import React, { useEffect, useState } from 'react';
import './AvailableInternships.css';
import logo from '../assets/brandlogo.png';
import { useNavigate } from "react-router-dom";
import CONFIG from '../config/config';

export default function AvailableInternships() {
  const navigate = useNavigate();
  const [internships, setInternships] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedInternship, setSelectedInternship] = useState(null);

  const goToAvailableInternships = () => {
    navigate("/availableinterships");
  };

  const goToLogin = () => {
    navigate("/authentication");
  };

  // ✅ Fetch internship data from backend
  useEffect(() => {
    const fetchInternships = async () => {
      try {
        const response = await fetch(`${CONFIG.BASE_URL}/api/retrive`); // Replace with your backend API
        const data = await response.json();
        console.log('Fetched internships:', data);
        setInternships(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching internships:', error);
        setLoading(false);
      }
    };

    fetchInternships();
  }, []);

  const handleJoin = (internship) => {
  navigate("/payment", { state: { internship } });
};

  return (
    <div className="internship-root">
      {/* Navbar */}
      <header className="nav">
        <div className="container nav-inner">
          <div className="logo-container">
            <img src={logo} alt="Skillintarn Logo" className="logo-img" />
          </div>
          <nav className="nav-links">
            <a onClick={() => navigate("/")}>Home</a>
            <a onClick={() => navigate("/about")}>About</a>
            <a onClick={() => navigate("/contact")}>Contact</a>
            <a onClick={goToAvailableInternships}>Internships</a>
            <a onClick={goToLogin}>Login</a>
          </nav>
        </div>
      </header>

      {/* Header */}
      <header className="internship-header">
        <div className="container">
          <h1>Available Internships</h1>
          <p>Choose an internship and join by paying ₹100 to unlock tasks.</p>
        </div>
      </header>

      {/* Internship Grid */}
      <main className="container internship-main">
        {loading ? (
          <p className="loading-text">Loading internships...</p>
        ) : (
          <div className="internship-grid">
            {internships.map((internship) => (
              <div className="internship-card" key={internship._id}>
                <div className="card-header">
                  <h3>{internship.title}</h3>
                  <p className="duration">Duration: {internship.duration}</p>
                </div>

                <div className="card-body">
                  <p>{internship.description}</p>
                  <div className="card-footer">
                    <span className="fee">₹{internship.fee}</span>
                    <button
                      className="btn primary"
                      onClick={() => handleJoin(internship)}
                    >
                      Join Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Payment Section */}
      {selectedInternship && (
        <section className="payment-section">
          <div className="container">
            <h2>Payment Details</h2>
            <div className="payment-card">
              <div className="payment-info">
                <h3>Selected Internship: {selectedInternship.title}</h3>
                <p>Duration: {selectedInternship.duration}</p>
                <p>Fee: ₹{selectedInternship.fee}</p>
              </div>
              <div className="payment-action">
                <button className="btn primary">Pay ₹{selectedInternship.fee} via Razorpay</button>
              </div>
            </div>
            <p className="payment-note">
              After successful payment, you will be redirected to your internship tasks dashboard.
            </p>
          </div>
        </section>
      )}
    </div>
  );
}
