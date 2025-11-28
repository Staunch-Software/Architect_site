import React, { useEffect, useRef, useState } from "react";
import "../styles/About.css";

// Import images
import abt1 from "../assets/abt1.jpg";
import abt2 from "../assets/abt2.JPG";
import abt3 from "../assets/abt3.PNG";
import abt4 from "../assets/abt4.jpg";
import abt5 from "../assets/abt5.jpg";

const About = () => {
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
    <div className="about-page-wrapper">
      {/* TITLE - FADE */}
      <h1
        className={`about-title ${visibleElements["title"] ? "fade-in-active" : ""}`}
        data-animate-id="title"
      >
        About Me
      </h1>

      <div className="about-page-container">
        <div className="spacer" />

        {/* IMAGES - REVEAL */}
        <div className="about-images-grid">
          <div
            className={`pixel-card spotlight-card img-1 ${visibleElements["img1"] ? "reveal-active" : ""}`}
            data-animate-id="img1"
            style={{ animationDelay: "0s" }}
          >
            <img src={abt5} alt="About 1" />
          </div>

          <div
            className={`pixel-card spotlight-card img-2 ${visibleElements["img2"] ? "reveal-active" : ""}`}
            data-animate-id="img2"
            style={{ animationDelay: "0.15s" }}
          >
            <img src={abt2} alt="About 2" />
          </div>

          <div
            className={`pixel-card spotlight-card img-3 ${visibleElements["img3"] ? "reveal-active" : ""}`}
            data-animate-id="img3"
            style={{ animationDelay: "0.3s" }}
          >
            <img src={abt4} alt="About 3" />
          </div>

          <div
            className={`pixel-card spotlight-card img-4 ${visibleElements["img4"] ? "reveal-active" : ""}`}
            data-animate-id="img4"
            style={{ animationDelay: "0.45s" }}
          >
            <img src={abt1} alt="About 4" />
          </div>

          <div
            className={`pixel-card spotlight-card img-5 ${visibleElements["img5"] ? "reveal-active" : ""}`}
            data-animate-id="img5"
            style={{ animationDelay: "0.6s" }}
          >
            <img src={abt3} alt="About 5" />
          </div>
        </div>

        {/* TEXT - SLIDE UP (Renamed class) */}
        <div className="about-page-text">
          <p
            className={`about-slide-up ${visibleElements["p1"] ? "slide-up-active" : ""}`}
            data-animate-id="p1"
            style={{ animationDelay: "0s" }}
          >
            Visual thinker, problem-solver. I design with intention, prototype
            fast, obsess over details, and always ask: how can this space make
            life better?
          </p>

          <p
            className={`about-slide-up ${visibleElements["p2"] ? "slide-up-active" : ""}`}
            data-animate-id="p2"
            style={{ animationDelay: "0.15s" }}
          >
            I design spaces that work as beautifully as they feel—places where
            people move, gather, rest, and experience moments that matter. From
            community-driven public spaces and sustainable urban interventions
            to material-rich installations and adaptive reuse concepts, I'm
            always searching for that intersection where function meets emotion.
          </p>

          <p
            className={`about-slide-up ${visibleElements["p3"] ? "slide-up-active" : ""}`}
            data-animate-id="p3"
            style={{ animationDelay: "0.3s" }}
          >
            Studying in three different countries Oman, India, and the United
            States shaped my worldview on experiencing such different cultures,
            landscapes, and ways of living made my design approach deeply
            adaptable, open-minded, and sensitive to context.
          </p>

          <p
            className={`about-slide-up ${visibleElements["p4"] ? "slide-up-active" : ""}`}
            data-animate-id="p4"
            style={{ animationDelay: "0.45s" }}
          >
            My design philosophy centers on human-focused thinking because great
            architecture begins with people—their needs, rhythms, challenges, and
            the subtle details that influence how they feel in a space.
          </p>
     
        <div className="about-buttons">
  <button className="about-btn">Resume</button>
  <button className="about-btn">Design Process</button></div>
  
</div>
      </div>

      {/* EXPERIENCE SECTION */}
      <div className="exp-section">
        <div className="exp-container">
          <div className="exp-left-col">
            <h2 className="exp-title experience-title">Experience</h2>
            <h2 className="exp-title education-title">Education</h2>
          </div>

          <div className="exp-right-col">
            <div
              className={`exp-row about-slide-up ${visibleElements["exp1"] ? "slide-up-active" : ""}`}
              data-animate-id="exp1"
              style={{ animationDelay: "0s" }}
            >
              <div className="exp-left">2022 Jan – 2022 July</div>
              <div className="exp-right">
                <h3 className="exp-role">
                  Trainee Architect @ Engaging Spaces, India
                </h3>
                <p>Assisted with floor plans and design for residential and commercial projects.</p>
                <p>Provided detailed working drawings for various projects.</p>
                <p>Assisted with selection of materials.</p>
                <p>Prepared Bill of Quantity (BOQ) for clients.</p>
                <p>Worked on interior working drawings for residential and commercial projects.</p>
              </div>
            </div>

            <div className="exp-line"></div>

            <div
              className={`exp-row about-slide-up ${visibleElements["exp2"] ? "slide-up-active" : ""}`}
              data-animate-id="exp2"
              style={{ animationDelay: "0.15s" }}
            >
              <div className="exp-left">2022 – 2025</div>
              <div className="exp-right">
                <h3 className="exp-role">
                  M.Arch – Savannah College Of Arts & Design, U.S.A
                </h3>
                <p>
                  During my three-year professional master of architecture program, I worked
                  across diverse design disciplines independently and collaboratively.
                  Strengthened hands-on fabrication, construction studies, conceptual thinking,
                  and designing full-scale architectural elements.
                </p>
              </div>
            </div>

            <div className="exp-line"></div>

            <div
              className={`exp-row about-slide-up ${visibleElements["exp3"] ? "slide-up-active" : ""}`}
              data-animate-id="exp3"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="exp-left">2017 – 2022</div>
              <div className="exp-right">
                <h3 className="exp-role">
                  B.Arch – BMS School Of Architecture, India
                </h3>
                <p>
                  Studied architectural theory and design studios, strengthened
                  model-making & collaborative design. Gained proficiency in AutoCAD,
                  Revit, SketchUp, Rhino, Lumion, and Adobe Suite to visualize and
                  communicate design ideas effectively.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;


