import React from 'react';
import '../assets/Navbar.css';

const Navbar = () => 
{
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-logo">
          <p><span style={{fontSize:'xxx-large'}}>R </span> eaction. <span className='blink'>AI</span> </p>
        </a>
        <ul className="nav-menu">
          <li className="nav-item">
            <a href="/text" className="nav-link" style={{fontSize:'larger'}}>
              Text AI
            </a>
          </li>
          <li className="nav-item">
            <a href="/image" className="nav-link" style={{fontSize:'larger'}}>
              Image AI
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
