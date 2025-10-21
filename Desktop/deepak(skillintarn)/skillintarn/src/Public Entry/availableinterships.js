// File: AvailableInternships.jsx
// Professional UI/UX design for Step 3 — Join Internship & Payment page (React + plain CSS)

import React from 'react';
import './AvailableInternships.css';
import logo from '../assets/brandlogo.png';
import { useNavigate } from "react-router-dom";


export default function AvailableInternships() {
  const navigate = useNavigate();

    const goToAvailableInternships = () => {
    navigate("/availableinterships"); // New navigation to Available Internships Page
  };

  const goToLogin = () => {
    navigate("/authentication");
  };
const internships = [
    { id: 1, title: 'Frontend Development', duration: '4 weeks', fee: 100, description: 'Learn HTML, CSS, JS, React through real projects.' },
    { id: 2, title: 'UI/UX Design', duration: '3 weeks', fee: 100, description: 'Wireframing, prototyping, and design fundamentals.' },
    { id: 3, title: 'Backend Development', duration: '4 weeks', fee: 100, description: 'Node.js, Express, MongoDB projects.' },
    { id: 4, title: 'Data Science Basics', duration: '4 weeks', fee: 100, description: 'Python, Pandas, Numpy, and data visualization projects.' },
    { id: 5, title: 'Digital Marketing', duration: '3 weeks', fee: 100, description: 'SEO, Social Media Marketing, and Google Ads campaigns.' },
    { id: 6, title: 'Mobile App Development', duration: '5 weeks', fee: 100, description: 'React Native and Flutter based projects for Android & iOS.' },
    { id: 7, title: 'Cybersecurity Fundamentals', duration: '4 weeks', fee: 100, description: 'Learn basic security concepts, penetration testing, and ethical hacking.' },
    { id: 8, title: 'Cloud Computing', duration: '4 weeks', fee: 100, description: 'AWS basics, cloud deployment, and serverless architecture.' }
];
  return (
    <div className="internship-root">
         <header className="nav">
                <div className="container nav-inner">
                  <div className="logo-container">
                    <img src={logo} alt="Skillintarn Logo" className="logo-img" />
                  </div>
                  <nav className="nav-links">
                    <a style={{ cursor: 'pointer' }} onClick={() => navigate("/")}>Home</a>
                    <a style={{ cursor: 'pointer' }} onClick={() => navigate("/about")}>About</a>
                    <a style={{ cursor: 'pointer' }} onClick={() => navigate("/contact")}>Contact</a>
                    <a style={{cursor:"pointer"}} onClick={goToAvailableInternships}>Internships</a> {/* Added Navigation */}
                    <a style={{cursor:"pointer"}} onClick={goToLogin}>Login</a>
                  </nav>
                </div>
              </header>
      <header className="internship-header">
        <div className="container">
          <h1>Available Internships</h1>
          <p>Choose an internship and join by paying ₹100 to unlock tasks.</p>
        </div>
      </header>

      <main className="container internship-main">
        <div className="internship-grid">
          {internships.map((internship) => (
            <div className="internship-card" key={internship.id}>
              <div className="card-header">
                <h3>{internship.title}</h3>
                <p className="duration">Duration: {internship.duration}</p>
              </div>

              <div className="card-body">
                <p>{internship.description}</p>
                <div className="card-footer">
                  <span className="fee">₹{internship.fee}</span>
                  <button className="btn primary">Join Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <section className="payment-section">
        <div className="container">
          <h2>Payment Details</h2>
          <div className="payment-card">
            <div className="payment-info">
              <h3>Selected Internship: Frontend Development</h3>
              <p>Duration: 4 weeks</p>
              <p>Fee: ₹100</p>
            </div>
            <div className="payment-action">
              <button className="btn primary">Pay ₹100 via Razorpay</button>
            </div>
          </div>
          <p className="payment-note">After successful payment, you will be redirected to your internship tasks dashboard.</p>
        </div>
      </section>
    </div>
  );
}
