import React from 'react';
import '../App.css';

const doctors = [
  {
    name: 'Dr. Priya Sharma',
    specialty: 'Cardiologist',
    description: 'MBBS, MD – Cardiology. 15+ years experience in interventional cardiology and heart failure management.',
    img: 'https://img.freepik.com/free-photo/female-doctor-hospital_23-2148827776.jpg'
  },
  {
    name: 'Dr. Arjun Mehta',
    specialty: 'Neurologist',
    description: 'MBBS, DM – Neurology. Specialist in stroke management, epilepsy, and neurodegenerative disorders.',
    img: 'https://img.freepik.com/free-photo/doctor-with-his-arms-crossed-white-background_1368-5790.jpg'
  },
  {
    name: 'Dr. Sneha Patel',
    specialty: 'Pediatrician',
    description: 'MBBS, MD – Pediatrics. Dedicated to child health with 12 years of clinical experience in neonatal care.',
    img: 'https://img.freepik.com/free-photo/woman-doctor-wearing-lab-coat-with-stethoscope-isolated_1303-29791.jpg'
  },
  {
    name: 'Dr. Ravi Kumar',
    specialty: 'Orthopedic Surgeon',
    description: 'MBBS, MS – Orthopedics. Expert in joint replacement, sports injuries, and spinal surgery.',
    img: 'https://img.freepik.com/free-photo/portrait-smiling-male-doctor_171337-1532.jpg'
  },
  {
    name: 'Dr. Meera Nair',
    specialty: 'Dermatologist',
    description: 'MBBS, MD – Dermatology. Specializes in skin disorders, cosmetic dermatology, and laser treatments.',
    img: 'https://img.freepik.com/free-photo/female-doctor-hospital-with-stethoscope_23-2148827803.jpg'
  },
  {
    name: 'Dr. Sameer Joshi',
    specialty: 'General Physician',
    description: 'MBBS, MD – General Medicine. 10+ years of experience in preventive care and chronic disease management.',
    img: 'https://img.freepik.com/free-photo/medium-shot-smiley-doctor-with-crossed-arms_23-2148665737.jpg'
  }
];

const Specialists = () => {
  return (
    <>
      <div className="specialists-header">
        <h1>Our Specialists</h1>
        <p>Meet our team of experienced and dedicated medical professionals committed to your health.</p>
      </div>

      <div className="specialists-container">
        <div className="specialists-grid">
          {doctors.map((doc, index) => (
            <div className="specialist-card" key={index}>
              <img src={doc.img} alt={doc.name} />
              <div className="specialist-info">
                <h3>{doc.name}</h3>
                <p className="specialty">{doc.specialty}</p>
                <p>{doc.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Specialists;
