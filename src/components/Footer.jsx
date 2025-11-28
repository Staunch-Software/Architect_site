import React, { useEffect, useRef, useState } from "react";
import "../styles/Footer.css";

const Footer = () => {
  const [visibleElements, setVisibleElements] = useState({});
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleElements((prev) => ({
              ...prev,
              [entry.target.dataset.animateId]: true,
            }));
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = document.querySelectorAll("[data-animate-id]");
    elements.forEach((el) => observerRef.current.observe(el));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <footer className="footer">

      <div className="footer-content">
              {/* ANIMATED LINE */}
      <div
        className={`footer-line ${visibleElements["line"] ? "line-active" : ""}`}
        data-animate-id="line"
      ></div>
        <div className="footer-top">
          <h2
            className={`footer-heading slide-up ${visibleElements["heading"] ? "slide-up-active" : ""}`}
            data-animate-id="heading"
            style={{ animationDelay: "0s" }}
          >
            Got a project in mind?
          </h2>
          <div
            className={`footer-cta slide-up ${visibleElements["cta"] ? "slide-up-active" : ""}`}
            data-animate-id="cta"
            style={{ animationDelay: "0.15s" }}
          >
            <span className="cta-text">Lets Get to Work!</span>
            <svg className="arrow-icon" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <line x1="20" y1="20" x2="80" y2="80" stroke="currentColor" strokeWidth="3" />
              <line x1="80" y1="80" x2="80" y2="55" stroke="currentColor" strokeWidth="3" />
              <line x1="80" y1="80" x2="55" y2="80" stroke="currentColor" strokeWidth="3" />
            </svg>
          </div>
        </div>

        <div className="footer-links">
          <a href="/resume.pdf" className="footer-link">[Resume]</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer-link">[LinkedIn]</a>
          <a href="mailto:contact@example.com" className="footer-link">[Email]</a>
        </div>

        <div className="footer-bottom">
          <p className="copyright">© 2025 sehba Hussaina</p>
          <p className="footer-note">
            Handcrafted with <span className="highlight">Love</span> and <span className="highlight">Iced Matcha Latte</span>
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;