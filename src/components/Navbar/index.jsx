import React, { useState } from 'react';
export default function Navbar(){
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
   <nav>
  <div className="logo"> Login</div>
  <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
    <li><a href="/">Home</a></li>
    <li><a href="/about">About</a></li>
    <li><a href="/contact">Contact</a></li>
  </ul>
  <div className="menu-icon" onClick={toggleMenu}>
    <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
    <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
    <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
  </div>
</nav>
);
}
  