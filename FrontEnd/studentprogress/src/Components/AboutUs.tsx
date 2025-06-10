import React from "react";

import './AboutUs.css';
import { Link, useNavigate } from "react-router-dom";
import img3 from '../assets/discord.png'
import img4 from '../assets/github.png'

const AboutUs = () => {
    return (
    <>
       <div className="about-container">
        <div className="cards">
        <h1>About Us</h1>
        <p>Welcome to our comprehensive academic platform, designed to streamline student assessments and instructor evaluations. Our goal is to create an interactive and efficient learning environment.</p>
        </div>
        <div className="cards">
        <h2>Our Mission</h2>
        <p>We strive to provide a seamless experience where students can submit quizzes and assignments effortlessly, while educators can evaluate and provide insightful feedback efficiently.</p>
        </div>
        <div className="cards">
        <h2>Why Choose Us?</h2>
        <ul>
            <li>✔ Easy quiz and assignment submissions – Students can submit assignments in PDF format or handwritten notes with scanned uploads.</li>
            <li>✔ Transparent evaluation system – After assessment, students receive detailed marking criteria to understand their performance.</li>
            <li>✔ Top achievers recognition – Students can view top-performing peers and collaborate on innovative projects to enhance learning.</li>
            <li>✔ User-friendly interface – Designed for both students and educators to streamline academic tasks.</li>
        </ul>
        </div>
        <div className="cards">
        <h2>Contact Us</h2>
        <p>Sharda University, Gautam Buddha Nagar, UP, India</p>
        <p>Email: <a href="mailto:contact@yourplatform.com">contact@yourplatform.com</a></p>

        <div className="social-links">
            <a href="https://github.com/yourprofile">
                <img src={img4} alt="GitHub Logo"/>
            </a>
            <a href="https://discord.gg/yourserver">
                <img src={img3} alt="Discord Logo"/>
            </a>
        </div>
        </div>
    </div>
    </>
    )
}
export default AboutUs;