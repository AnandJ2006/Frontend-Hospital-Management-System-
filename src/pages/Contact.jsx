import React, { useState } from 'react';
import '../App.css';

const Contact = ({ setCurrentPage }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('Please enter a valid email address.');
      return;
    }

    const newMessage = {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
      submittedAt: new Date().toISOString()
    };

    try {
      const response = await fetch(
        "https://hospital-management-system-t69x.onrender.com/api/contact/add",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(newMessage)
        }
      );

      const data = await response.json();

      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        alert(data.message || "Failed to send message");
      }

    } catch (error) {
      console.error(error);
      alert("Server error");
    }
  };

  return (
    <>
      {/* HEADER */}
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you. Get in touch with our team.</p>
      </div>

      {/* MAIN */}
      <div className="contact-container">
        <div className="contact-content">

          {/* INFO */}
          <div className="contact-info">
            <h2>Contact Information</h2>

            <div className="contact-info-box">
              <h3>📍 Address</h3>
              <p>Surat, Gujarat, India</p>
            </div>

            <div className="contact-info-box">
              <h3>📞 Phone</h3>
              <p><a href="tel:+912616450000">+91-261-6450000</a></p>
            </div>

            <div className="contact-info-box">
              <h3>📧 Email</h3>
              <p><a href="mailto:contact@medicals.com">contact@medicals.com</a></p>
            </div>
          </div>

          {/* FORM */}
          <div className="form-section">
            <h2>Send Message</h2>

            <form className="contact-form" onSubmit={handleFormSubmit}>
              
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
              />

              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleInputChange}
                required
              ></textarea>

              <button type="submit" className="submit-btn">
                Send Message
              </button>

            </form>
          </div>
        </div>

        {/* SOCIAL */}
        <div className="social-section">
          <h3>Follow Us</h3>
          <div className="social-links">
            <a href="https://facebook.com">Facebook</a>
            <a href="https://twitter.com">Twitter</a>
            <a href="https://linkedin.com">LinkedIn</a>
            <a href="https://instagram.com">Instagram</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;