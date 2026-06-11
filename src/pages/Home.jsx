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
          <img
            src="https://img.freepik.com/free-photo/medical-team-standing-together_23-2147845373.jpg"
            alt="Healthcare Team"
            className="hero-image"
          />
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

      {/* DEPARTMENTS SECTION */}
      <section className="departments">
        <h2>Our Specialties</h2>
        <p className="section-desc">Providing world-class care across multiple medical disciplines.</p>
        <div className="dept-grid">
          <div className="dept-card">
            <span className="dept-icon">🫀</span>
            <h3>Cardiology</h3>
            <p>Expert heart care with advanced diagnostic and therapeutic services.</p>
          </div>
          <div className="dept-card">
            <span className="dept-icon">🧠</span>
            <h3>Neurology</h3>
            <p>Comprehensive care for neurological disorders and brain health.</p>
          </div>
          <div className="dept-card">
            <span className="dept-icon">🦴</span>
            <h3>Orthopedics</h3>
            <p>Specialized treatment for bone, joint, and muscle conditions.</p>
          </div>
          <div className="dept-card">
            <span className="dept-icon">👶</span>
            <h3>Pediatrics</h3>
            <p>Dedicated healthcare services for children from birth to adolescence.</p>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="testimonials">
        <h2>Patient Stories</h2>
        <div className="testimonial-container">
          <div className="testimonial-card">
            <p className="quote">"The care I received was exceptional. The staff was attentive and the doctors were highly skilled."</p>
            <h4>- Sarah Jenkins</h4>
          </div>
          <div className="testimonial-card">
            <p className="quote">"Booking an appointment was seamless, and I didn't have to wait. Highly recommend this hospital."</p>
            <h4>- Michael Chen</h4>
          </div>
          <div className="testimonial-card">
            <p className="quote">"A truly modern facility with compassionate professionals. They made my recovery process so much easier."</p>
            <h4>- Emily Rodriguez</h4>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Need Emergency Care?</h2>
          <p>Our emergency department is open 24/7. Don't hesitate to reach out if you need immediate assistance.</p>
          <button className="btn-emergency" onClick={() => window.location.href='tel:911'}>Call 911 / Emergency</button>
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
