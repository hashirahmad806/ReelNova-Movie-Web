// import React from 'react';
// import './Navbar.css';

// function Navbar() {
//   return (
//     <nav className="navbar">
//       <div className="container">
//         <div className="brand">ReelNova</div>
//         <ul className="nav-links">
//           <li><a href="/">Home</a></li>
//           <li><a href="/favorites">Favorite</a></li>
          
//           <li><a href="/about">About</a></li>
//           <li><a href="/contact">Contact</a></li>
//         </ul>
//         <button className="nav-btn"><a href="/login">login Now </a></button>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;





import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="brand" onClick={closeMenu}>ReelNova</div>

        <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
          <li><a href="/" className="nav-link" onClick={closeMenu}>Home</a></li>
          <li><a href="/favorites" className="nav-link" onClick={closeMenu}>Favorite</a></li>
          <li><a href="/about" className="nav-link" onClick={closeMenu}>About</a></li>
          <li><a href="/contact" className="nav-link" onClick={closeMenu}>Contact</a></li>
          <li><a href="/login" className="nav-link mobile-login" onClick={closeMenu}>Login Now</a></li>
        </ul>

        {/* <button className="nav-btn">
          <a href="/login">Login Now</a>
        </button> */}

        {/* Hamburger Icon */}
        <div
          className={`hamburger ${isOpen ? 'active' : ''}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {/* Overlay background when menu is open */}
      {isOpen && <div className="overlay" onClick={closeMenu}></div>}
    </nav>
  );
}

export default Navbar;
