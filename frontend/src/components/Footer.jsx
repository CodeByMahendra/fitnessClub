
// src/components/Footer.js
import React from "react";
import "./Footer.css"; // Import the separate CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <hr className="footer-divider" />
      <div className="footer-content">
        <div className="footer-section">
          <h2>Services</h2>
          <ul>
            <li>Personal Training</li>
            <li>Online Training</li>
            <li>One To One Coaching</li>
            <li>Nutrition Coaching</li>
            <li>3D Body Scanning</li>
            <li>Mindset Course</li>
          </ul>
        </div>
        <div className="footer-section">
          <h2>Company</h2>
          <ul>
            <li>About</li>
            <li>Blog</li>
            <li>Terms & Conditions</li>
            <li>Policy</li>
            <li>Articles</li>
            <li>Reviews</li>
          </ul>
        </div>
        <div className="footer-section">
          <h2>Support</h2>
          <ul>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#request">Submit a Request</a></li>
            <li><a href="#community">Join Our Community</a></li>
            <li><a href="#join">Join Now</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h2>Address</h2>
          <address>
            123 Fitness Ave, Suite 100<br />
            Dewas, Madhya Pradesh, 455115
          </address>
          <p>
            Phone: <a href="tel:+918641098378">(+91)8641098378</a><br />
            Email: <a href="mailto:fitnessclub@gmail.com">fitnessgym@gmail.com</a><br />
            <a href="https://www.instagram.com/ll_mahi_.ll" target="_blank" rel="noopener noreferrer">Instagram</a>
          </p>
        </div>
      </div>
      <hr className="footer-divider" />
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} The Fitness Gym. All rights reserved.</p>
        <p>
          Designed with <span className="heart">❤️</span> by Mahendra Thakur
        </p>
      </div>
    </footer>
  );
};

export default Footer;

