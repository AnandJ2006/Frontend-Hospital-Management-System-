  import React, { useState, useEffect } from 'react';
  import '../App.css';

  const Contact = ({ setCurrentPage }) => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    const [submitted, setSubmitted] = useState(false);

    // Load submission count from localStorage on mount
    useEffect(() => {
      const messages = JSON.parse(localStorage.getItem('contactMessages') || '[]');
      setSubmitted(messages.length > 0);
    }, []);

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
        id: Date.now(),
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        submittedAt: new Date().toISOString()
      };

      await fetch(
  "https://hospital-management-system-t69x.onrender.com/api/contact/add",
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newMessage)
  }
);

      alert("Thank you for contacting us! We'll get back to you soon.");
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSubmitted(true);
    };

    return (
      <>
        {/* CONTACT HEADER */}
        <div className="contact-header">
          <h1>Contact Us</h1>
          <p>We'd love to hear from you. Get in touch with our team for any inquiries or support.</p>
        </div>

        {/* CONTACT CONTAINER */}
        <div className="contact-container">
          <div className="contact-content">

            {/* CONTACT INFO */}
            <div className="contact-info">
              <h2>Contact Information</h2>

              <div className="contact-info-box">
                <h3>📍 Address</h3>
                <p>1st Floor, A – Millennium Point</p>
                <p>Opp. Gabani Kidney Hospital</p>
                <p>Station Rd, Surat 395003</p>
                <p>Gujarat, India</p>
              </div>

              <div className="contact-info-box">
                <h3>📞 Phone</h3>
                <p><a href="tel:+91-261-6450000">+91-261-6450000</a></p>
                <p><a href="tel:+91-261-2380000">+91-261-2380000</a></p>
              </div>

              <div className="contact-info-box">
                <h3>📧 Email</h3>
                <p><a href="mailto:contact@medicals.com">contact@medicals.com</a></p>
                <p><a href="mailto:support@medicals.com">support@medicals.com</a></p>
              </div>

              <div className="contact-info-box">
                <h3>⏰ Business Hours</h3>
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>

            {/* CONTACT FORM */}
            <div className="form-section">
              <h2>Send us a Message</h2>
              <form className="contact-form" onSubmit={handleFormSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleInputChange} required />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea id="message" name="message" value={formData.message} onChange={handleInputChange} rows="5" required></textarea>
                </div>

                <button type="submit" className="submit-btn">Send Message</button>
              </form>
            </div>
          </div>

          {/* SOCIAL SECTION */}
          <div className="social-section">
            <h3>Follow Us</h3>
            <div className="social-links">
              <a href="https://facebook.com" className="social-link" title="Facebook">f</a>
              <a href="https://twitter.com" className="social-link" title="Twitter">𝕏</a>
              <a href="https://linkedin.com" className="social-link" title="LinkedIn">in</a>
              <a href="https://instagram.com" className="social-link" title="Instagram">📷</a>
            </div>
          </div>
        </div>
      </>
    );
  };

  export default Contact;
