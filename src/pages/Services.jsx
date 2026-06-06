import React from 'react';
import '../App.css';

export default function Services() {
  return (
    <>
      {/* SERVICES HEADER */}
      <div className="services-header">
        <h1>Our Services</h1>
        <p>Comprehensive healthcare management solutions tailored for modern medical institutions</p>
      </div>

      {/* SERVICES CONTAINER */}
      <div className="services-container">
        <div className="services-grid">
          <div className="service-card">
            <h3>Appointment Management</h3>
            <p>Schedule and manage patient appointments efficiently with automated reminders and real-time availability updates.</p>
          </div>

          <div className="service-card">
            <h3>Electronic Health Records (EHR)</h3>
            <p>Secure, centralized patient records with complete medical history, test results, and treatment plans accessible to authorized personnel.</p>
          </div>

          <div className="service-card">
            <h3>Billing & Invoicing</h3>
            <p>Automated billing system with insurance processing, payment tracking, and financial reporting for improved revenue management.</p>
          </div>

          <div className="service-card">
            <h3>Pharmacy Management</h3>
            <p>Streamlined pharmaceutical inventory tracking, prescription management, and medication dispensing with barcode scanning.</p>
          </div>

          <div className="service-card">
            <h3>Diagnostics</h3>
            <p>Integrated diagnostic lab reports with order tracking, results management, and seamless integration with patient records.</p>
          </div>

          <div className="service-card">
            <h3>Patient Portal</h3>
            <p>User-friendly patient interface for booking appointments, accessing health records, and communicating with healthcare providers.</p>
          </div>

          <div className="service-card">
            <h3>Analytics & Reporting</h3>
            <p>Advanced analytics dashboard providing insights into operational efficiency, patient outcomes, and financial performance.</p>
          </div>

          <div className="service-card">
            <h3>24/7 Support</h3>
            <p>Round-the-clock technical support and customer service to ensure uninterrupted hospital operations and user assistance.</p>
          </div>
        </div>
      </div>
    </>
  );
}
