


// import React, { useState } from 'react';
// import './Navbar.css';

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   const closeMenu = () => {
//     setIsOpen(false);
//   };

//   return (
//     <nav className="navbar">
//       <div className="container">
//         <div className="brand" onClick={closeMenu}>ReelNova</div>

//         <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
//           <li><a href="/" className="nav-link" onClick={closeMenu}>Home</a></li>
//           <li><a href="/favorites" className="nav-link" onClick={closeMenu}>Favorite</a></li>
//           <li><a href="/about" className="nav-link" onClick={closeMenu}>About</a></li>
//           <li><a href="/contact" className="nav-link" onClick={closeMenu}>Contact</a></li>
//           <li><a href="/login" className="nav-link mobile-login" onClick={closeMenu}>Login Now</a></li>
//         </ul>

//         {/* <button className="nav-btn">
//           <a href="/login">Login Now</a>
//         </button> */}

//         {/* Hamburger Icon */}
//         <div
//           className={`hamburger ${isOpen ? 'active' : ''}`}
//           onClick={toggleMenu}
//         >
//           <span></span>
//           <span></span>
//           <span></span>
//         </div>
//       </div>

//       {/* Overlay background when menu is open */}
//       {isOpen && <div className="overlay" onClick={closeMenu}></div>}
//     </nav>
//   );
// }

// export default Navbar;



// import React, { useState } from "react";
// import "./Navbar.css";
// import { Link } from "react-router-dom";

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="navbar">
//       <div className="container">
//         <div className="brand">Reel Nova</div>

//         <div
//           className={`hamburger ${isOpen ? "active" : ""}`}
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           <span></span>
//           <span></span>
//           <span></span>
//         </div>
//       </div>

//       {/* Dropdown Menu */}
//       {isOpen && (
//         <ul className="dropdown-menu">
//           <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
//           <li><Link to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
//           <li><Link to="/favorites" onClick={() => setIsOpen(false)}>Favorites</Link></li>
//           <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
//           <li><Link to="/login" onClick={() => setIsOpen(false)}>Login Now </Link></li>
//         </ul>
//       )}
//     </nav>
//   );
// }

// export default Navbar;



import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close dropdown on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <nav className="navbar">
      <div className="container">
        <div className="brand">Reel Nova</div>

        {/* Row menu for large screens */}
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/favorites">Favorites</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/login">Login Now</Link></li>
        </ul>

        {/* Hamburger for small screens */}
        <div
          className={`hamburger ${isOpen ? "active" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {/* Dropdown for mobile */}
      {isOpen && (
        <ul className="dropdown-menu">
          <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
          <li><Link to="/favorites" onClick={() => setIsOpen(false)}>Favorites</Link></li>
          <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
          <li><Link to="/login" onClick={() => setIsOpen(false)}>Login Now</Link></li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
