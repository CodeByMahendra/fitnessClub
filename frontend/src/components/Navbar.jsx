

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobile(!isMobile);
  };

  const closeMobileMenu = () => {
    setIsMobile(false);
  };

  return (
    <header className="navbar">
      <nav className="nav-container">
        <div className="nav-brand">
          <NavLink to="/" onClick={closeMobileMenu}>
            <img src="/logo1.png" alt="Brand Logo" className="brand-logo" />
          </NavLink>
        </div>

        {/* Navigation Links */}
        <ul className={`nav-links ${isMobile ? 'mobile-active' : ''}`}>
          <li>
            <NavLink exact to="/" onClick={closeMobileMenu} activeClassName="active-link">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/bmiCalculate" onClick={closeMobileMenu} activeClassName="active-link">
              BMI Calculate
            </NavLink>
          </li>
          <li>
            <NavLink to="/ourService" onClick={closeMobileMenu} activeClassName="active-link">
              Our Services
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={closeMobileMenu} activeClassName="active-link">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={closeMobileMenu} activeClassName="active-link">
              Contact Us
            </NavLink>
          </li>
        </ul>

        {/* Hamburger Menu */}
        <button className="menu-toggle" onClick={toggleMobileMenu} aria-label={isMobile ? 'Close menu' : 'Open menu'}>
          {isMobile ? <FaTimes /> : <FaBars />}
        </button>
      </nav>
      {isMobile && <div className="overlay" onClick={closeMobileMenu}></div>}
    </header>
  );
};

export default Navbar;
