import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

function Header() {
  return (
    <div className='nav-bar'>
      <Link to="/">
        <h1>Dali Portfolio</h1>
      </Link>
      <ul className='nav-menu'>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/projects">Porjects</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </div>
  );
}

export default Header;
