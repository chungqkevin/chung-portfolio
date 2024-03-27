import React, { useEffect } from 'react';
import smoothscroll from 'smoothscroll-polyfill';
import '../styles/header.css'; // Import your CSS file here

// Apply polyfill
smoothscroll.polyfill();

function Header(){
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    // Apply polyfill on component mount
    smoothscroll.polyfill();
  }, [])
  return (
    <header className="header"> {/* Add class name for styling */}
    <div className = "nav-container">
      <h1>
        <a href="/" className="header-link">Kevin Chung</a> {/* Add class name for styling */}
      </h1>
      <nav className="nav"> {/* Add class name for styling */}
        <ul>
          <li><button onClick={() => scrollToSection('about')}>About</button></li>
          <li><button onClick={() => scrollToSection('work')}>Works</button></li>
          <li><button onClick={() => scrollToSection('contact')}>Contact</button></li>
        </ul>
      </nav>
    </div>
    </header>
  );
}

export default Header;
