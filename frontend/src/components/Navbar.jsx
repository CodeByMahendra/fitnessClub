

// import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom';
// // import './Navbar.css';
// import { FaBars, FaTimes } from 'react-icons/fa';

// const Navbar = () => {
//   const [isMobile, setIsMobile] = useState(false);

//   // Toggle the mobile menu
//   const toggleMobileMenu = () => {
//     setIsMobile(!isMobile);
//   };

//   // Close the mobile menu
//   const closeMobileMenu = () => {
//     setIsMobile(false);
//   };

//   return (
//     <>
//       <nav className='navBar'>
//         <div className='navContainer'>
//           {/* Brand Name */}
//           <div className='navPart-1'>
//             <img src="/logo1.png" />
//           </div>

//           {/* Navigation Links */}
//           <ul className={`navPart-2 ${isMobile ? 'mobileMenu' : ''}`}>
//             <li>
//               <NavLink exact to='/' onClick={closeMobileMenu} activeClassName='active'>
//                 Home
//               </NavLink>
//             </li>
//             <li>
//               <NavLink to='/bmiCalculate' onClick={closeMobileMenu} activeClassName='active'>
//                 BMI Calculate
//               </NavLink>
//             </li>
//             <li>
//               <NavLink to='/ourService' onClick={closeMobileMenu} activeClassName='active'>
//                 Our Services
//               </NavLink>
//             </li>
//             <li>
//               <NavLink to='/about' onClick={closeMobileMenu} activeClassName='active'>
//                 About
//               </NavLink>
//             </li>
//             <li>
//               <NavLink to='/contact' onClick={closeMobileMenu} activeClassName='active'>
//                 Contact Us
//               </NavLink>
//             </li>
//           </ul>

//           {/* Hamburger Menu Icon */}
//           <button
//             className='mobileMenuIcon'
//             onClick={toggleMobileMenu}
//             aria-label={isMobile ? 'Close menu' : 'Open menu'}
//             aria-expanded={isMobile}
//           >
//             {isMobile ? <FaTimes /> : <FaBars />}
//           </button>
//         </div>
//       </nav>

//       {/* Overlay */}
//       {isMobile && <div className='overlay' onClick={closeMobileMenu}></div>}
//     </>
//   );
// };

// export default Navbar;

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
