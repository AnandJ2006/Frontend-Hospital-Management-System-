import React from 'react';
import '../App.css';

export default function About() {
  return (
    <>
      {/* ABOUT HEADER */}
      <div className="about-header">
        <h1>About MEDICALS</h1>
        <p>Leading the Healthcare Industry with Innovative Management Solutions</p>
      </div>

      {/* ABOUT CONTENT */}
      <div className="about-container">

        {/* WHO WE ARE */}
        <div className="about-section">
          <h2>Who We Are</h2>
          <p>
            MEDICALS is a premier Hospital Management System (HMS) provider dedicated to transforming healthcare operations through innovative technology. With over a decade of experience in the healthcare sector, we've successfully implemented our solutions in hospitals, clinics, and diagnostic centers across the region.
          </p>
          <p>
            Our platform is designed to streamline every aspect of hospital operations—from patient appointments and electronic health records to billing, pharmacy management, and diagnostics—all in one unified system.
          </p>
        </div>

        {/* MISSION & VISION */}
        <div className="mission-vision">
          <div className="mission-card">
            <h3>🎯 Our Mission</h3>
            <p>
              To empower healthcare providers with intelligent, user-friendly technology solutions that improve patient care, enhance operational efficiency, and reduce administrative burden.
            </p>
          </div>
          <div className="vision-card">
            <h3>🚀 Our Vision</h3>
            <p>
              To become the most trusted and widely adopted Hospital Management System provider, enabling healthcare institutions to deliver world-class services with confidence and reliability.
            </p>
          </div>
        </div>

        {/* CORE VALUES */}
        <div className="about-section">
          <h2>Our Core Values</h2>
          <div className="values-container">
            <div className="value-box">
              <h4>✓ Patient-Centric</h4>
              <p>Every decision we make is centered on improving patient care and experience.</p>
            </div>
            <div className="value-box">
              <h4>✓ Innovation</h4>
              <p>We continuously invest in research and development to stay ahead of industry trends.</p>
            </div>
            <div className="value-box">
              <h4>✓ Reliability</h4>
              <p>99.9% uptime guarantee with 24/7 customer support and dedicated technical assistance.</p>
            </div>
            <div className="value-box">
              <h4>✓ Security</h4>
              <p>Enterprise-grade data encryption and HIPAA-compliant infrastructure to protect sensitive patient information.</p>
            </div>
            <div className="value-box">
              <h4>✓ Collaboration</h4>
              <p>We work closely with healthcare professionals to understand their needs and deliver tailored solutions.</p>
            </div>
            <div className="value-box">
              <h4>✓ Excellence</h4>
              <p>We maintain the highest standards of quality in every product and service we deliver.</p>
            </div>
          </div>
        </div>

        {/* WHY CHOOSE US */}
        <div className="about-section">
          <h2>Why Choose MEDICALS?</h2>
          <p>
            <strong>Comprehensive Solution:</strong> Our all-in-one platform eliminates the need for multiple disconnected systems, reducing complexity and improving workflow efficiency.
          </p>
          <p>
            <strong>Easy Integration:</strong> Seamlessly integrate with existing healthcare systems and devices. Our API-first architecture supports custom integrations tailored to your needs.
          </p>
          <p>
            <strong>Scalability:</strong> Whether you're a small clinic or a large hospital network, MEDICALS scales with your organization. Add departments, users, and facilities without worrying about performance.
          </p>
          <p>
            <strong>Expert Support:</strong> Our dedicated support team is available 24/7 to ensure smooth operations. We provide regular training and continuous assistance.
          </p>
        </div>
      </div>
    </>
  );
}
