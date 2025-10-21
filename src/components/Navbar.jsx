


// import React, { useState, useEffect } from "react";
// import "./Navbar.css";
// import { Link, useLocation } from "react-router-dom";

// import { useAuth } from '../context/AuthContext';
// import { useNavigate } from 'react-router-dom';

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const location = useLocation();


// const { user, logout } = useAuth();
//   const navigate = useNavigate();

//   const handleLogout = async () => {
//     try {
//       await logout();        // Deletes the current session & clears user in context
//       navigate('/login');    // Redirect to login page after logout
//     } catch (error) {
//       console.error('Logout failed:', error);
//     }
//   };

//   // Close dropdown on route change
//   useEffect(() => {
//     setIsOpen(false);
//   }, [location.pathname]);

//   return (
//     <nav className="navbar">
//       <div className="container">
//         <div className="brand">Reel Nova</div>

//         {/* Row menu for large screens */}
//         <ul className="nav-links">
//           <li><Link to="/">Home</Link></li>
//           <li><Link to="/about">About</Link></li>
//           <li><Link to="/favorites">Favorites</Link></li>
//           <li><Link to="/contact">Contact</Link></li>
//           <li><Link to="/login">Login Now</Link></li>
//         </ul>

//         {/* Hamburger for small screens */}
//         <div
//           className={`hamburger ${isOpen ? "active" : ""}`}
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           <span></span>
//           <span></span>
//           <span></span>
//         </div>
//       </div>

// <div>
//         {user ? (
//           <>
//             <span className="text-gray-300 mr-4">Hello, {user.name || user.email}</span>
//             <button
//               onClick={handleLogout}
//               className="bg-red-600 px-4 py-2 rounded hover:bg-red-700 transition"
//             >
//               Logout
//             </button>
//           </>
//         ) : (
//           <button
//             onClick={() => navigate('/login')}
//             className="bg-indigo-600 px-4 py-2 rounded hover:bg-indigo-700 transition"
//           >
//             Login
//           </button>
//         )}
//       </div>

//       {/* Dropdown for mobile */}
//       {isOpen && (
//         <ul className="dropdown-menu">
//           <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
//           <li><Link to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
//           <li><Link to="/favorites" onClick={() => setIsOpen(false)}>Favorites</Link></li>
//           <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
//           <li><Link to="/login" onClick={() => setIsOpen(false)}>Login Now</Link></li>
//         </ul>
//       )}
//     </nav>
//   );
// }

// export default Navbar;




















// src/components/Navbar.jsx

import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  // Close dropdown on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <nav className="navbar">
      <div className="container">
        {/* Brand */}
        <div className="brand" onClick={() => navigate("/")}>
          Reel Nova
        </div>

        {/* Desktop Navigation */}
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/favorites">Favorites</Link></li>
          <li><Link to="/contact">Contact</Link></li>

          {/* Conditional Login/Logout */}
          {user ? (
            <>
              <li   className="nav-link">
                <button onClick={handleLogout} className="nav-btn logout">
                  Logout
                </button>
              </li>
            </>
          ) : (
            <li>
              <Link to="/login">
                <button   className="nav-link">Login</button>
              </Link>
            </li>
          )}
        </ul>

        {/* Hamburger Icon for Mobile */}
        <div
          className={`hamburger ${isOpen ? "active" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <ul className="dropdown-menu">
          <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
          <li><Link to="/favorites" onClick={() => setIsOpen(false)}>Favorites</Link></li>
          <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>

          {user ? (
            <>
              <li>
                <button onClick={handleLogout} className="nav-links">
                  Logout
                </button>
              </li>
            </>
          ) : (
            <li>
              <Link to="/login" onClick={() => setIsOpen(false)}>
                <button className="nav-link">Login</button>
              </Link>
            </li>
          )}
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
