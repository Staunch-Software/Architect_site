import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom"; // Import Link and useLocation
import "../styles/Nav.css";

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-content">
        <div className="logo">Portfolio</div>
        <div className="nav-links">
          {/* Use Link to navigate between routes */}
          <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Home</Link>
          <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}>About</Link>
          <Link to="/projects" className={`nav-link ${location.pathname === '/projects' ? 'active' : ''}`}>Projects</Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;