import './Navbar.css'
import { useState } from 'react'
import logo from '../images/IMG-20241002-WA0011.jpg'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Function to handle scrolling to sections
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false); // Close the menu after clicking an item
  };

  return (
    <nav className="nav">
      <img src={logo} alt="Logo" className="nav-logo" />
      
      <div className="hamburger" onClick={toggleMenu}>
        &#9776; {/* Hamburger icon */}
      </div>
      
      <ul className={`nav-list ${isOpen ? 'open' : ''}`}>
        <li className="nav-item" onClick={() => scrollToSection('home')}>Home</li>
        <li className="nav-item" onClick={() => scrollToSection('about')}>About Us</li>
        <li className="nav-item" onClick={() => scrollToSection('products')}>Products</li>
        <li className="nav-item" onClick={() => scrollToSection('delivery')}>Delivery Policy</li>
        <li className="nav-item" onClick={() => scrollToSection('contact')}>Contact Us</li>
      </ul>
    </nav>
  );
}

export default Navbar;
