// src/ContactPage.js
import React from 'react';
import Doctor from '../../assets/js/doctor';
import '../../assets/css/doctor.css'
import pic from '../../assets/images/darshan.jpg'
import{ useEffect,useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';

const doctorsData = [
    {
        image: pic,
        name: 'Dr. John Doe',
        specialty: 'Cardiologist',
        phone: '123-456-7890'
    },
    {
        image: pic,
        name: 'Dr. Jane Smith',
        specialty: 'Dermatologist',
        phone: '234-567-8901'
    },
    {
        image: pic,
        name: 'Dr. Emily Davis',
        specialty: 'Pediatrician',
        phone: '345-678-9012'
    },
    {
        image: pic,
        name: 'Dr. Michael Brown',
        specialty: 'Neurologist',
        phone: '456-789-0123'
    },
    {
        image: pic,
        name: 'Dr. Sarah Wilson',
        specialty: 'Orthopedic',
        phone: '567-890-1234'
    },
    {
        image: pic,
        name: 'Dr. David Johnson',
        specialty: 'Gastroenterologist',
        phone: '678-901-2345'
    },
];

const ContactPage = () => {
    const navigate = useNavigate();
    return (
        <div className="doctor video-container">
            <video autoPlay muted loop id="background-video">
                <source src="./videp.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="heading">
                <center><h1>
                Mind Mentor <span role="img" aria-label="Memo">💚</span>
                </h1>
                <p >Your journey to a better mental state</p>
                </center>
            </div>

            <nav className="ui">
                <center>
                <button onClick={() => navigate('/dashboard')}>Home</button>
                <button onClick={() => navigate('/newdiary')}>New Diary</button>
                <button onClick={() => navigate('/viewdiary')}>View Diary</button>
                </center>
            </nav>
                <div className="contact-page">
                    <div className="doctor-columns">
                        {doctorsData.map((doctor, index) => (
                            <Doctor 
                                key={index}
                                image={doctor.image}
                                name={doctor.name}
                                specialty={doctor.specialty}
                                phone={doctor.phone}
                            />
                        ))}
                    </div>
                </div>
            <footer className="foot">
                Created by:&nbsp;&nbsp;
                <a href="https://www.linkedin.com/in/akash-k-p" className="custom-link">Akash K P</a>&nbsp;&nbsp;&nbsp;&nbsp;
                <a href="https://www.linkedin.com/in/sppratham108" className="custom-link">S P Pratham</a>&nbsp;&nbsp;&nbsp;&nbsp;
                <a href="https://www.linkedin.com/in/ggurusainath" className="custom-link">G Gurusainath</a>&nbsp;&nbsp;&nbsp;&nbsp;
                <button className="lgBtn" onClick={() => navigate('/logout')}>
                    <div className="sign">
                    <svg viewBox="0 0 512 512">
                        <path
                        d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"
                        />
                    </svg>
                    </div>
                    <div className="text">Logout</div>
                </button>
            </footer>
        </div>
    );
};

export default ContactPage;
