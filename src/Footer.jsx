import React from 'react';

const Footer = ({ setCurrentPage }) => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-info">
          <h3>MEDICALS</h3>
          <p>Enterprise-grade Hospital Management System providing unified healthcare solutions.<br />Simplifying appointments, EMR, billing, pharmacy, and diagnostics for modern medical institutions.</p>
        </div>
        <div className="footer-links">
          <h4>Quick Links</h4>
          <a onClick={() => setCurrentPage('home')}>Home</a>
          <a onClick={() => setCurrentPage('about')}>About Us</a>
          <a onClick={() => setCurrentPage('services')}>Services</a>
          <a onClick={() => setCurrentPage('contact')}>Contact</a>
          <a onClick={() => setCurrentPage('privacy')}>Privacy Policy</a>
          <a onClick={() => setCurrentPage('terms')}>Terms & Conditions</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 MEDICALS. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
