import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from "framer-motion";
import '../styles/Home.css';
import aboutImg from '../assets/abt.jpg'; 
import Lanyard from './Lanyard';

// Project Images
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.png";

// Intersection Observer Hook
const useIntersectionObserver = (options = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, { threshold: 0.2, ...options });

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return [elementRef, isVisible];
};

// TextType Component
const TextType = ({
  text = [],
  typingSpeed = 75,
  pauseDuration = 1500,
  showCursor = true,
  cursorCharacter = "|"
}) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    const textArray = Array.isArray(text) ? text : [text];
    const fullText = textArray[currentTextIndex] || '';

    let timeout;

    if (!isDeleting && currentText === fullText) {
      timeout = setTimeout(() => setIsDeleting(true), pauseDuration);
    } else if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setCurrentTextIndex((prev) => (prev + 1) % textArray.length);
    } else {
      const speed = isDeleting ? typingSpeed / 2 : typingSpeed;
      timeout = setTimeout(() => {
        setCurrentText(prev =>
          isDeleting
            ? fullText.substring(0, prev.length - 1)
            : fullText.substring(0, prev.length + 1)
        );
      }, speed);
    }

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentTextIndex, text, typingSpeed, pauseDuration]);

  useEffect(() => {
    if (!showCursor) return;

    const interval = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, 530);

    return () => clearInterval(interval);
  }, [showCursor]);

  return (
    <span className="text-type">
      {currentText}
      {showCursor && (
        <span className={`text-type__cursor ${!cursorVisible ? 'text-type__cursor--hidden' : ''}`}>
          {cursorCharacter}
        </span>
      )}
    </span>
  );
};

// About Section Component
const AboutSection = () => {
  const [headingRef, headingVisible] = useIntersectionObserver();
  const [textRef, textVisible] = useIntersectionObserver();
  const [descRef, descVisible] = useIntersectionObserver();
  const [imageRef, imageVisible] = useIntersectionObserver();
  const [btn1Ref, btn1Visible] = useIntersectionObserver();
  const [btn2Ref, btn2Visible] = useIntersectionObserver();

  return (
    <div id="about" className="home-about-section">
      <div className="home-about-container">
        {/* Top Section */}
        <div className="home-about-top">
          <h2
            ref={headingRef}
            className={`home-about-heading ${headingVisible ? 'slide-in-visible' : ''}`}
          >
            About
          </h2>
          <p
            ref={textRef}
            className={`home-about-text ${textVisible ? 'slide-in-visible' : ''}`}
          >
            Hi, I'm Sehba. A Recent Graduate from Savannah College of Arts and design with a Professional Master of Architecture degree, with a passion for all kinds of Design.
          </p>
        </div>

        {/* Bottom Section */}
        <div className="home-about-bottom">
          <div className="home-about-bottom-left">
            <div
              ref={imageRef}
              className={`home-about-image-wrapper ${imageVisible ? 'reveal-visible' : ''}`}
            >
              <img
                src={aboutImg}
                alt="Sehba presenting architecture work"
                className="home-about-image"
              />
            </div>
          </div>

          <div className="home-about-bottom-right">
            <p
              ref={descRef}
              className={`home-about-description ${descVisible ? 'slide-in-visible' : ''}`}
            >
              Passionate for any forms of Design, with a focus on User-Centered, thoughtful and sustainable solutions. I strive to create experiences that are meaningful, accessible, and built to endure. Click to know more about me and my design process.
            </p>
            <div className="home-about-buttons">
              <button
                ref={btn1Ref}
                className={`home-about-btn ${btn1Visible ? 'fade-in-visible' : ''}`}
              >
                About me
              </button>
              <button
                ref={btn2Ref}
                className={`home-about-btn home-about-btn-delay ${btn2Visible ? 'fade-in-visible' : ''}`}
              >
                See My Design Process
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Projects Section Components
const sections = [
  {
    id: "project-1",
    img: img1,
    title: "Leaf-Life HUB",
    text: "leaf-life hub is a food recycling center committed to regeneration. by collecting and processing food waste from restaurants and residents, it transforms discarded materials into nutrient-rich fertilizers that help restore soil and support local agriculture.",
    style: { height: "350px", width: "90%" }
  },
  {
    id: "project-2",
    img: img2,
    title: "Echo and Embrace",
    text: "The form of the building embraces soft curves, natural textures, and open spatial planning to evoke calmness and balance. Nature is integrated as a core element—not an addition—transforming the center into a living sanctuary where each space supports mindfulness, relaxation, and rejuvenation.",
    style: { height: "350px", width: "90%" }
  },
  {
    id: "project-3",
    img: img3,
    title: "Concrete",
    text: "Concrete is a versatile architectural material valued for its strength, durability, and sculptural flexibility. It allows architects to create bold structural forms, clean lines, and seamless surfaces while offering excellent thermal mass and long-term resilience.",
    style: { height: "350px", width: "90%",margintop:"50%" }
  },
  {
    id: "project-4",
    img: img4,
    title: "Wellness Center",
    text: "A Wellness Center is designed as a restorative architectural environment that promotes physical, emotional, and mental well-being. Through natural materials, soft lighting, and calming spatial flow, it creates a sanctuary where users can unwind, rejuvenate, and reconnect with themselves.",
    style: { height: "350px", width: "85%" }
  },
  {
    id: "project-5",
    img: img5,
    title: "Cascadia",
    text: "Nestled in Hallets Point of Astoria this design aims to provide residents with a dynamic living experience having access to outdoor space and circulation to easily move throughout the building As the site continues a landscape appears connecting the site to the river an looking onto Randalls Island Field ",
    style: { height: "350px", width: "95%" }
  
  },
];

const ScrollBlock = ({ sec }) => {
  const ref = React.useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const imgY = useTransform(scrollYProgress, [0, 0.35, 1], [100, 0, -200]);
  const imgOpacity = useTransform(scrollYProgress, [0, 0.15, 1], [0, 1, 0]);

  const textY = useTransform(scrollYProgress, [0, 0.5], [200, 0]);
  const textOpacity = useTransform(scrollYProgress, [0.1, 0.9], [0, 1]);

  return (
    <div className="story-section" ref={ref}>

      {/* TITLE + IMAGE FIXED TOGETHER */}
      <motion.div
        className="sticky-block"
        style={{ y: imgY, opacity: imgOpacity }}
      >
        <div className="image-title">{sec.title}</div>

        <img
          src={sec.img}
          className="sticky-image"
          alt=""
          style={sec.style}
        />
      </motion.div>

      {/* Text */}
      <motion.div
        className="story-text"
        style={{ y: textY, opacity: textOpacity }}
      >
        <p>{sec.text}</p>
      </motion.div>
    </div>
  );
};

const ProjectScrollStory = () => {
  return (
    <div className="story-wrapper">
      <h1 className="story-title">Featured Projects</h1>

      {sections.map((sec, index) => (
        <ScrollBlock key={index} sec={sec} />
      ))}
    </div>
  );
};

// Home Component
const Home = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePos({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="home-container">
      {/* Hero Section - UPDATED CLASS NAME */}
      <section ref={heroRef} className="home-hero-section hero-reveal">
        <div className="bg-circle bg-circle-1 floating-circle pulse-circle"></div>
        <div className="bg-circle bg-circle-2 floating-circle"></div>
        <div className="bg-circle bg-circle-3 pulse-circle"></div>
        <div className="bg-circle bg-circle-4 floating-circle"></div>

        <div
          className="mouse-follower"
          style={{
            left: mousePos.x,
            top: mousePos.y,
          }}
        ></div>

        <div className="hero-content-wrapper">
          <div className="hero-content">
            <h1 className="hero-title">
              <span className="greeting text-reveal">
                <TextType
                  text={["Hi, I'm Sehba Hussaina\nArchitecture  Designer"]}
                  typingSpeed={60}
                  pauseDuration={1500}
                  showCursor={false}
                />
              </span>
            </h1>
          </div>

          <div className="hero-lanyard">
            <Lanyard
              position={[0, 4, 30]}
              gravity={[0, -40, 0]}
              fov={20}
              transparent={true}
            />
          </div>
        </div>
      </section>

      {/* About Teaser Section */}
      <AboutSection />

      {/* Projects Section */}
      <ProjectScrollStory />
    </div>
  );
};

export default Home;