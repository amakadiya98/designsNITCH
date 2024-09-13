import React, { useState } from 'react';
import { Dropdown, Navbar } from "flowbite-react";
import HedaerLogo from '../assets/images/logo.svg'

function Header() {

    const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


    return(
        <Navbar className="navbar-part">
             <div className={`w-full lg:block lg:w-auto ${isOpen ? 'block' : 'hidden'}`} id="navbar-hamburger">
        <Navbar.Collapse>
          <Navbar.Link href="#" className="nav-link">LIFESTYLE</Navbar.Link>
          <Navbar.Link href="#" className="nav-link">Fashion</Navbar.Link>
          <Navbar.Link href="#" className="nav-link">Homewear</Navbar.Link>
          <Navbar.Link href="#" className="nav-link">Art</Navbar.Link>
          <Navbar.Link href="#" className="nav-link">DS COLLECTIONS</Navbar.Link>
        </Navbar.Collapse>
        </div>
        <Navbar.Brand href="https://flowbite-react.com">
          <img src={HedaerLogo} className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        </Navbar.Brand>
          {/* Hamburger Menu Toggle */}
            <button 
                className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none"
                aria-controls="navbar-hamburger" 
                aria-expanded={isOpen} 
                onClick={toggleMenu}>
                <svg className="w-6 h-6" fill="#fff" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round"  strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
                </svg>
            </button>
            <div className={`w-full lg:block lg:w-auto ${isOpen ? 'block' : 'hidden'}`} id="navbar-hamburger">
            <Navbar.Collapse>
          <Navbar.Link href="#" className="nav-link">Search</Navbar.Link>
          <Navbar.Link href="#" className="nav-link">Wishlist</Navbar.Link>
          <Navbar.Link href="#" className="nav-link">Basket</Navbar.Link>
          <div className="dropdown-btn">
            <Dropdown label="Account" inline>
              <Dropdown.Item className="drop-down-item">Account</Dropdown.Item>
              <Dropdown.Item className="drop-down-item">Profile</Dropdown.Item>
              <Dropdown.Item className="drop-down-item">Sign Out</Dropdown.Item>
            </Dropdown>
          </div>
        </Navbar.Collapse>
            </div>
       
      </Navbar>
    );
}

export default Header;