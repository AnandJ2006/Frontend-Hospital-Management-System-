import React, { useState, useRef, useEffect } from 'react';
import '../App.css';

const Home = ({ setCurrentPage }) => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    patientName: '',
    patientEmail: '',
    patientPhone: '',
    appointmentDate: '',
    appointmentTime: '',
    departmentSelect: '',
    appointmentReason: ''
  });
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && event.target === modalRef.current) {
        setShowModal(false);
      }
    };
    window.addEventListener('click', handleClickOutside);
    return () => window.removeEventListener('click', handleClickOutside);
  }, []);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const { patientName, patientEmail, patientPhone, appointmentDate, appointmentTime, departmentSelect } = formData;

    if (!patientName || !patientEmail || !patientPhone || !appointmentDate || !appointmentTime || !departmentSelect) {
      alert('Please fill in all required fields.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(patientEmail)) {
      alert('Please enter a valid email address.');
      return;
    }

    await fetch(
  "https://hospital-management-system-t69x.onrender.com/api/appointment/book",
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(formData)
  }
);

    alert("Appointment booked successfully! We'll contact you soon.");
    setFormData({ patientName: '', patientEmail: '', patientPhone: '', appointmentDate: '', appointmentTime: '', departmentSelect: '', appointmentReason: '' });
    setShowModal(false);
  };

  return (
    <>
      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-left">
          <h2>Healthcare Operations, Simplified.</h2>
          <p>
            An enterprise-grade Hospital Management System (HMS) and Clinic Management Software
            that unifies appointments, EMR/EHR, billing, pharmacy, diagnostics, and patient workflows.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary" onClick={() => setShowModal(true)}>Get Appointment</button>
            <button className="btn-secondary" onClick={() => setCurrentPage('about')}>Learn More</button>
          </div>
        </div>

        <div className="hero-right">
          <div className="card">1+ <span>Years of Trusted</span></div>
          <div className="card">10+ <span>Appointments</span></div>
          <div className="card">99.9% <span>Uptime</span></div>
          <div className="card">10+ <span>Implementations</span></div>
        </div>
      </section>

      {/* APPOINTMENT MODAL */}
      <div ref={modalRef} className={`modal ${showModal ? 'open' : ''}`}>
        <div className="modal-content">
          <span className="close" onClick={() => setShowModal(false)}>&times;</span>
          <h2>Book an Appointment</h2>
          <form onSubmit={handleFormSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="patientName">Full Name *</label>
                <input type="text" id="patientName" value={formData.patientName} onChange={handleInputChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="patientEmail">Email *</label>
                <input type="email" id="patientEmail" value={formData.patientEmail} onChange={handleInputChange} required />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="patientPhone">Phone Number *</label>
                <input type="tel" id="patientPhone" value={formData.patientPhone} onChange={handleInputChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="appointmentDate">Preferred Date *</label>
                <input type="date" id="appointmentDate" value={formData.appointmentDate} onChange={handleInputChange} required />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="appointmentTime">Preferred Time *</label>
                <input type="time" id="appointmentTime" value={formData.appointmentTime} onChange={handleInputChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="departmentSelect">Department *</label>
                <select id="departmentSelect" value={formData.departmentSelect} onChange={handleInputChange} required>
                  <option value="">Select Department</option>
                  <option value="cardiology">Cardiology</option>
                  <option value="neurology">Neurology</option>
                  <option value="orthopedics">Orthopedics</option>
                  <option value="pediatrics">Pediatrics</option>
                  <option value="general">General Practice</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="appointmentReason">Reason for Visit</label>
              <textarea id="appointmentReason" value={formData.appointmentReason} onChange={handleInputChange} rows="3" placeholder="Brief description of your concern..."></textarea>
            </div>

            <button type="submit" className="btn-submit">Book Appointment</button>
          </form>
        </div>
      </div>

      {/* FEATURES SECTION */}
      <section className="features">
        <h2>For AI-Based Hospital Information Management System</h2>
        <div className="feature-container">
          <div className="feature-box">
            <h3>Unified Healthcare Solution</h3>
            <p>Comprehensive solution to achieve medical excellence with our hospital system.</p>
          </div>
          <div className="feature-box">
            <h3>Cloud-Based Hospital Management</h3>
            <p>Access your data anywhere with flexible cloud-based software.</p>
          </div>
          <div className="feature-box">
            <h3>Best CRM For Hospital</h3>
            <p>Improve patient engagement and communication with smart CRM tools.</p>
          </div>
          <div className="feature-box">
            <h3>Cost Efficient</h3>
            <p>Reduce operational costs and improve financial performance.</p>
          </div>
          <div className="feature-box">
            <h3>Secured Platform</h3>
            <p>Protect sensitive patient data with advanced security systems.</p>
          </div>
          <div className="feature-box">
            <h3>Integrated Care</h3>
            <p>All healthcare services unified into one powerful platform.</p>
          </div>
        </div>
      </section>

      {/* INFO SECTION */}
      <section className="info">
        <h2>Healthcare Software</h2>
        <p>Built for hospitals, clinics, and solo practitioners with complete digital solutions.</p>
      </section>
    </>
  );
};

export default Home;
