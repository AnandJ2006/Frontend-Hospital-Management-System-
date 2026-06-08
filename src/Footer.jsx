import React from 'react';

const Footer = ({ setCurrentPage }) => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-info">
          <h3>MEDICALS</h3>
          <p>
            Enterprise-grade Hospital Management System providing unified healthcare solutions.
            <br />
            Simplifying appointments, EMR, billing, pharmacy, and diagnostics for modern medical institutions.
          </p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>

          <button onClick={() => setCurrentPage('home')} className="link-btn">Home</button>
          <button onClick={() => setCurrentPage('about')} className="link-btn">About Us</button>
          <button onClick={() => setCurrentPage('services')} className="link-btn">Services</button>
          <button onClick={() => setCurrentPage('contact')} className="link-btn">Contact</button>
          <button onClick={() => setCurrentPage('privacy')} className="link-btn">Privacy Policy</button>
          <button onClick={() => setCurrentPage('terms')} className="link-btn">Terms & Conditions</button>
          <button onClick={() => setCurrentPage('admin-login')} className="link-btn" style={{ color: '#e94560' }}>Admin Portal</button>

        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2026 MEDICALS. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;