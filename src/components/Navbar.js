import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [setClick] = useState(false);

  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <img src={'/images/isbi.png'} width="65" height="65"/> 
            Institut Seni Budaya Indonesia
          </Link>
          <div className='text-judul'>
            GIS <br />
            Peta Budaya JawaBarat
          </div>
          <div>
          <pre>
            
          </pre>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
