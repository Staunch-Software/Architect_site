import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Nav.css";
import logoImage from "../assets/logoo.png"; // Add your logo image

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-content">

        {/* LOGO - Updated to use image */}
        <Link to="/" className="logo" onClick={closeMenu}>
          <img src={logoImage} alt="SH Logo" className="logo-image" />
        </Link>

        {/* HAMBURGER BUTTON */}
        <button
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* NAV LINKS */}
        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          <Link
            to="/"
            className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
            onClick={closeMenu}
          >
            Home
          </Link>

          <Link
            to="/about"
            className={`nav-link ${
              location.pathname === "/about" ? "active" : ""
            }`}
            onClick={closeMenu}
          >
            About
          </Link>

          <Link
            to="/projects"
            className={`nav-link ${
              location.pathname === "/projects" ? "active" : ""
            }`}
            onClick={closeMenu}
          >
            Projects
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;