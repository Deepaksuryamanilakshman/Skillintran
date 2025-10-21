import React from "react";
import "./HomePage.css";
import logo from '../assets/brandlogo.png';
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate(); // useNavigate hook

  const goToLogin = () => {
    navigate("/authentication"); // navigate to AuthPage
  };

  const goToPay = () => {
    navigate("/authentication"); // example: use same AuthPage for payment/login flow
  };

  return (
    <div className="site-root">
      {/* Navbar */}
      <header className="nav">
        <div className="container nav-inner">
          <div className="logo-container">
            <img src={logo} alt="Skillintarn Logo" className="logo-img" />
          </div>
          <nav className="nav-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
            <a style={{cursor:"pointer"}} onClick={goToLogin}>Login</a>
          </nav>
        </div>
      </header>

      {/* Main content */}
      <main>
        {/* Hero Section */}
        <section className="hero" id="home">
          <div className="container hero-grid">
            <div className="hero-left">
              <h1 className="hero-title">
                Join an Internship for just ₹100 and earn a verified certificate
              </h1>
              <p className="hero-sub">
                Real projects • Mentorship • Certificate with QR verification. Start building your portfolio today.
              </p>

              <div className="hero-cta">
                <button className="btn primary" onClick={goToPay}>Join Internship — ₹100</button>
                <a className="btn ghost" href="#how">How it Works</a>
              </div>

              <ul className="trust-list">
                <li>✔️ Verified certificate</li>
                <li>✔️ Easy task-based learning</li>
                <li>✔️ Lifetime access to your certificate</li>
              </ul>
            </div>

       
          </div>
        </section>

        {/* How it works */}
        <section className="how container" id="how">
          <h2 className="section-title">How it works</h2>
          <div className="steps-grid">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Join Internship</h3>
              <p>Pay ₹100 to enroll and unlock tasks & resources.</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Complete Tasks</h3>
              <p>Submit practical assignments and receive mentor feedback.</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Get Certificate</h3>
              <p>After approval, download a verified certificate with a QR code.</p>
            </div>
          </div>
        </section>

        {/* Popular Internships */}
        <section className="features container" id="internships">
          <h2 className="section-title">Popular Internships</h2>
          <div className="cards">
            <article className="card">
              <h4>Frontend Development</h4>
              <p>HTML • CSS • JavaScript • React — 4 weeks</p>
              <div className="card-footer">
                <div className="card-fee">₹100</div>
                <button className="btn small" onClick={goToPay}>Join</button>
              </div>
            </article>

            <article className="card">
              <h4>UI/UX Design</h4>
              <p>Design fundamentals, wireframing, prototyping — 3 weeks</p>
              <div className="card-footer">
                <div className="card-fee">₹100</div>
                <button className="btn small" onClick={goToPay}>Join</button>
              </div>
            </article>

            <article className="card">
              <h4>Backend Basics</h4>
              <p>Node.js, Express, MongoDB — 4 weeks</p>
              <div className="card-footer">
                <div className="card-fee">₹100</div>
                <button className="btn small" onClick={goToPay}>Join</button>
              </div>
            </article>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="cta-banner">
          <div className="container cta-inner">
            <div>
              <h3>Ready to start?</h3>
              <p>Join an internship now and add a verified certificate to your resume.</p>
            </div>
            <div>
              <button className="btn primary large" onClick={goToPay}>Join Now — ₹100</button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer-inner">
          <div>© {new Date().getFullYear()} Skillintarn. All rights reserved.</div>
          <div className="footer-links">
            <a href="#privacy">Privacy</a>
            <a href="#terms">Terms</a>
            <a href="#verify">Verify Certificate</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
