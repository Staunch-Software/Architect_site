import React, { useEffect, useRef, useState } from "react";
import resumeImage from "../assets/resume.jpg";
const Footer = () => {
  const [visibleElements, setVisibleElements] = useState({});
  const [hoveredCard, setHoveredCard] = useState(null);
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

  const styles = {
    footer: {
      background: 'rgba(32, 3, 36, 1)',
      color: '#ffffff',
      padding: '4rem 2rem 2rem',
      position: 'relative',
      overflow: 'hidden',
    },
    decorativeCircle: {
      position: 'absolute',
      width: '400px',
      height: '400px',
      borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(173, 12, 141, 0.2) 0%, transparent 70%)',
      top: '-200px',
      right: '-200px',
      pointerEvents: 'none',
    },
    footerContent: {
      maxWidth: '1400px',
      margin: '0 auto',
      width: '100%',
      position: 'relative',
      zIndex: 1,
    },
    topSection: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '4rem',
      marginBottom: '4rem',
      alignItems: 'center',
    },
    leftColumn: {
      opacity: 0,
      transform: 'translateX(-50px)',
      transition: 'all 0.8s ease',
    },
    leftColumnActive: {
      opacity: 1,
      transform: 'translateX(0)',
    },
    projectText: {
      fontSize: '1.1rem',
      color: 'rgba(255, 255, 255, 0.7)',
      marginBottom: '1rem',
      letterSpacing: '2px',
      textTransform: 'uppercase',
    },
    mainHeading: {
      fontSize: '4rem',
      fontWeight: '800',
      background: 'linear-gradient(135deg, rgba(173, 12, 141, 0.99) 0%, #a00c8d 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      marginBottom: '1.5rem',
      lineHeight: '1.2',
    },
    subtext: {
      fontSize: '1.2rem',
      color: 'rgba(255, 255, 255, 0.8)',
      lineHeight: '1.6',
    },
    rightColumn: {
      display: 'flex',
      flexDirection: 'column',
      gap: '2rem',
      opacity: 0,
      transform: 'translateX(50px)',
      transition: 'all 0.8s ease 0.2s',
    },
    rightColumnActive: {
      opacity: 1,
      transform: 'translateX(0)',
    },
    contactCard: {
      background: 'rgba(255, 255, 255, 0.05)',
      borderRadius: '12px',
      padding: '1.5rem',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(173, 12, 141, 0.3)',
      transition: 'all 0.3s ease',
      cursor:'pointer',
      textDecoration: 'none',
      display: 'block',
    },
    contactCardHover: {
      background: 'rgba(173, 12, 141, 0.15)',
      border: '1px solid rgba(173, 12, 141, 0.6)',
      transform: 'translateY(-5px)',
    },
    cardLabel: {
      fontSize: '0.9rem',
      color: 'rgba(173, 12, 141, 0.99)',
      marginBottom: '0.5rem',
      textTransform: 'uppercase',
      letterSpacing: '1.5px',
    },
    cardValue: {
      fontSize: '1.3rem',
      color: 'rgba(255, 255, 255, 0.95)',
      fontWeight: '500',
    },
    divider: {
      width: '100%',
      height: '1px',
      background: 'linear-gradient(90deg, transparent 0%, rgba(173, 12, 141, 0.5) 50%, transparent 100%)',
      margin: '3rem 0',
    },
    bottomSection: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    copyright: {
      fontSize: '1rem',
      color: 'rgba(255, 255, 255, 0.6)',
    },
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.decorativeCircle}></div>
      
      <div style={styles.footerContent}>
        <div style={styles.topSection}>
          <div 
            style={{
              ...styles.leftColumn,
              ...(visibleElements['left'] ? styles.leftColumnActive : {})
            }}
            data-animate-id="left"
          >
            <p style={styles.projectText}>Got a project in mind?</p>
            <h2 style={styles.mainHeading}>
              Let's Create<br />Something Great
            </h2>
            <p style={styles.subtext}>
              Ready to bring your ideas to life? I'm here to help turn your vision into reality.
            </p>
          </div>

          <div 
            style={{
              ...styles.rightColumn,
              ...(visibleElements['right'] ? styles.rightColumnActive : {})
            }}
            data-animate-id="right"
          >
            <a 
              href={resumeImage} 
              target="_blank"
              rel="noopener noreferrer" 
              style={{
                ...styles.contactCard,
                ...(hoveredCard === 'resume' ? styles.contactCardHover : {})
              }}
              onMouseEnter={() => setHoveredCard('resume')}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div style={styles.cardLabel}>Resume</div>
              <div style={styles.cardValue}>View My Work</div>
            </a>

            <a 
              href="https://www.linkedin.com/in/sehba99" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                ...styles.contactCard,
                ...(hoveredCard === 'linkedin' ? styles.contactCardHover : {})
              }}
              onMouseEnter={() => setHoveredCard('linkedin')}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div style={styles.cardLabel}>LinkedIn</div>
              <div style={styles.cardValue}>Connect With Me</div>
            </a>

            <div 
              style={{
                ...styles.contactCard,
                ...(hoveredCard === 'address' ? styles.contactCardHover : {})
              }}
              onMouseEnter={() => setHoveredCard('address')}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div style={styles.cardLabel}>Location</div>
              <div style={styles.cardValue}>
                29, Hopkins Ave, Jersey City<br />
                New Jersey
              </div>
            </div>
          </div>
        </div>

        <div style={styles.divider}></div>

        <div style={styles.bottomSection}>
          <p style={styles.copyright}>© 2025 by Sehba Hussaina</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;