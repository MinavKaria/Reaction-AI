import React from 'react';
import '../assets/Navbar.css';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <p><span style={{ fontSize: 'xxx-large' }}>R </span> eaction. <span className='blink'>AI</span> </p>
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/text" className="nav-link" style={{ fontSize: 'larger' }}>
              Text AI
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/image" className="nav-link" style={{ fontSize: 'larger' }}>
              Image AI
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
