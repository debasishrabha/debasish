import React, { useState, useEffect } from 'react';
import './nav.css';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Toggle sidebar open/close
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const closeSidebar = () => setSidebarOpen(false);

  // Update isMobile on window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    // Set initial value
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="navbar-wrapper">
      {/* === Desktop Navbar === */}
      {!isMobile && (
        <nav className="navbar">
          <a href="/resume.pdf" className="resume-button" download>
            Download Resume
          </a>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      )}

      {/* === Mobile Header === */}
      {isMobile && (
        <div className="mobile-header">
          <div className="mobile-title">Debasish<span>_.</span></div>
          <div className="hamburger-fixed" onClick={toggleSidebar}>
            <FaBars />
          </div>
        </div>
      )}

      {/* === Sidebar (Mobile) === */}
      <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <div className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </div>
        <ul>
          <li onClick={closeSidebar}><a href="#home">Home</a></li>
          <li onClick={closeSidebar}><a href="#about">About</a></li>
          <li onClick={closeSidebar}><a href="#projects">Projects</a></li>
          <li onClick={closeSidebar}><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
