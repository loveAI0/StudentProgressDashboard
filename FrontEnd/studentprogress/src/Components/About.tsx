import React from "react";
import './About.css'
import { Link, useNavigate } from "react-router-dom";
import img1 from '../assets/student_Logo.png'
import img2 from '../assets/teacher_logo.png'
import img3 from '../assets/discord.png'
import img4 from '../assets/github.png'

const About = () => {
    const navigate = useNavigate();
    const navReg = () =>{
        navigate('/reg');
    }
    return (
    
        <div>
      {/* Navbar */}
      <nav className="navbar">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>
        <Link to="/register" className="register-button">Register</Link>
      </nav>

      {/* Main Container */}
      <div className="main-container">
        <div className="vision-container">
        <h2>Vision Statement</h2>
        <p>"An integrated academic ecosystem that streamlines student assessments and instructor evaluations, promoting efficiency, transparency, and collaborative learning."</p>
        
        <blockquote>
            "You have to grow from the inside out. None can teach you, none can make you spiritual. There is no other teacher but your own soul."  
            <span>— Swami Vivekananda</span>
        </blockquote>
       </div>
 
        {/* Student Section */}
        <div className="roles-container">

          <div className="student-section">
            <h2>Student Role</h2>
            <img src={img1} alt="Student Logo" className="logo student-logo"/>
            <p>✅ Download Quizzes</p>
            <p>✅ View Quizzes</p>
            <p>✅ Join Quizzes</p>
          </div>

          {/* Teacher Section */}
          <div className="teacher-section">
              <h2>Teacher Role</h2> 
            <img src={img2} alt="Teacher Logo" className="logo teacher-logo"/>
            <p>✅ Upload Quizzes</p>
            <p>✅ View Student Performance</p>
          </div>
       </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="social-icons">
        <a href="" target="_blank">
            <img src={img3} alt="YouTube" className="icon"/>
        </a>
        <a href="" target="_blank">
            <img src={img4} alt="Instagram" className="icon"/>
        </a>
        </div>
        <p>© 2025 Our Website | All Rights Reserved</p>
        
      </footer>
    </div>
        
        
        
        
        
    )

}
export default About;