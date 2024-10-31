// src/Doctor.js
import React from 'react';
import '../css/doctor.css'; // Import the CSS file for styling

const Doctor = ({ image, name, specialty, phone }) => {
    return (
        <div className="doctor-card">
            <img src={image} alt={name} className="doctor-image" />
            <h3>{name}</h3>
            <p>{specialty}</p>
            <p>Phone: {phone}</p>
        </div>
    );
};

export default Doctor;
