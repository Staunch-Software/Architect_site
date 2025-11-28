import React, { useState, useEffect, useRef } from "react";
import "../styles/wellness.css";

/* -----------------------------------------
   IMPORT IMAGES
------------------------------------------ */

// HERO IMAGES
import heroMain from "../assets/wellness-hero-main.jpg";
import heroSide1 from "../assets/wellness-hero-side1.jpg";
import heroSide2 from "../assets/wellness-hero-side2.jpg";
import heroSide3 from "../assets/wellness-hero-side3.jpg";

// COMBINED IMAGES
import mapCombined from "../assets/wellness-map-combined.jpg";
import vennCombined from "../assets/wellness-venn-combined.jpg";

// PROBLEM DIAGRAM
import diagramProblem from "../assets/wellness-problem-diagram.jpg";

// RESULT
import resultIcons from "../assets/result-icons.jpg";
import resultWords from "../assets/result-wordcloud.jpg";

// SITE CONTEXT
import siteContext1 from "../assets/wellness-sitecontext1.jpg";
import siteContext2 from "../assets/wellness-sitecontext2.jpg";
import siteContext3 from "../assets/wellness-sitecontext3.jpg";
import siteContext4 from "../assets/wellness-sitecontext4.jpg";

// USER
import userGroups from "../assets/wellness-usergroups.jpg";
import userJourney from "../assets/wellness-userjourney.jpg";

// Placeholder.
import placeholderImg from "../assets/placeholder-temp.jpg";

// CONCEPT
import conceptFlow1 from "../assets/wellness-concept1.jpg";
import conceptFlow2 from "../assets/wellness-concept2.jpg";

// SECTIONS
import sectionDiag1 from "../assets/wellness-section1.jpg";
import sectionDiag2 from "../assets/wellness-section2.jpg";

// AXONOMETRIC
import bigAxon1 from "../assets/wellness-axon1.jpg";
import bigAxon2 from "../assets/wellness-axon2.jpg";

/* CONTINUATION */
import axo1 from "../assets/wellness-axo1.jpg";
import axo2 from "../assets/wellness-axo2.jpg";
import axo3 from "../assets/wellness-axo3.jpg";
import axo4 from "../assets/wellness-axo4.jpg";

import explodedView from "../assets/wellness-exploded.jpg";
import floor1 from "../assets/wellness-floor1.jpg";
import floor2 from "../assets/wellness-floor2.jpg";

import circle1 from "../assets/wellness-circle1.jpg";
import circle2 from "../assets/wellness-circle2.jpg";
import circle3 from "../assets/wellness-circle3.jpg";

import corridorImg from "../assets/wellness-corridor.jpg";

import gallery1 from "../assets/wellness-gallery1.jpg";
import gallery2 from "../assets/wellness-gallery2.jpg";
import gallery3 from "../assets/wellness-gallery3.jpg";
import gallery4 from "../assets/wellness-gallery4.jpg";
import gallery5 from "../assets/wellness-gallery5.jpg";
import gallery6 from "../assets/wellness-gallery6.jpg";

import finalSectionImg from "../assets/wellness-final-section.jpg";

const Wellness = () => {
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
    <div className="wellness-page">

      {/* ================= HERO ================= */}
      <div 
        className={`wellness-hero ${visibleElements["hero"] ? "fade-in-active" : ""}`}
        data-animate-id="hero"
      >
        <div className="hero-left">
          <h1 className="hero-title">
            A Holistic Retreat that supports <br /> the transition into Motherhood
          </h1>

          <div className="hero-meta">
            <div className="hero-meta-item">
              <span className="meta-label">Project Type</span>
              <span className="meta-value">Wellness</span>
            </div>

            <div className="hero-meta-item">
              <span className="meta-label">Spring</span>
              <span className="meta-value">2025</span>
            </div>

            <div className="hero-meta-item">
              <span className="meta-label">Location</span>
              <span className="meta-value">Muscat, Oman</span>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <p>The journey into motherhood is often romanticized, yet the reality can be far more complex and challenging. Recent research reveals that one in three women report experiencing lasting health problems after giving birth highlighting the often-overlooked physical and mental challenges faced by many mothers in the postpartum period. These challenges encompass not only the physical toll of childbirth but also emotional, psychological, and social dimensions that can severely impact mental health.
This project explores the challenges new mothers face during the postpartum period and focus on designing a postpartum and rejuvenation center for new mothers and their infants. The facility will support postpartum recovery by offering a nurturing space that promotes both physical healing and mental relaxation. Through innovative design and holistic care, integrating principles from
environmental psychology, to create a serene atmosphere. the center will foster community,
A facility that prioritizes the holistic well-being of new mothers can significantly enhance their postpartum
experience and address the challenges they face.
By focusing on their physical fitness, mental relaxation, and overall wellness while allowing them to keep their babies close, such a space fosters a nurturing and supportive environment.</p>
        </div>
      </div>

      {/* HERO STRIP */}
      <div 
        className={`wellness-gallery-row ${visibleElements["galleryRow"] ? "float-in-active" : ""}`}
        data-animate-id="galleryRow"
      >
        <div className="gallery-main"><img src={heroMain} alt="" /></div>
        <div className="gallery-side">
          <img src={heroSide1} alt="" />
          <img src={heroSide2} alt="" />
          <img src={heroSide3} alt="" />
        </div>
      </div>

      {/* PROBLEM & SITE */}
      <div 
        className={`wellness-section problem-site ${visibleElements["problemSite"] ? "float-in-active" : ""}`}
        data-animate-id="problemSite"
      >
        <div className="section-left">
          <h2 className="section-title">Problem and Site</h2>
          <div className="single-image-block"><img src={mapCombined} alt="" /></div>
        </div>
        <div className="section-right"><p>The site is located in Muscat, Oman. Oman is rich in its culture and heritage and follows a lots of traditions and customs. However, with the current trends and women going into the work force and the family setting turning into a nuclear family there is a high need for a postpartum care centre.
Muscat possesses both easter and currently rising western culture which opens up opportunities for such facilities and with the rise in expats from other countries who dont have the support of their family members, this could be a really good place for the necessary help they require.</p></div>
      </div>

      {/* AIM & PHILOSOPHY */}
      <div 
        className={`wellness-section aim-philosophy ${visibleElements["aimPhil"] ? "float-in-active" : ""}`}
        data-animate-id="aimPhil"
      >
        <h2 className="section-title">Design Aim and Philosophy</h2>
        <div className="dual-image-block">
          <img src={vennCombined} alt="" />
          <img src={diagramProblem} alt="" />
        </div>
      </div>

      {/* RESULT */}
      <div 
        className={`wellness-section result-expectation ${visibleElements["result"] ? "float-in-active" : ""}`}
        data-animate-id="result"
      >
        <h2 className="section-title">Result of the Expectation and Solution</h2>
        <div className="result-layout">
          <img src={resultIcons} alt="" />
          <img src={resultWords} alt="" />
        </div>
      </div>

      {/* SITE CONTEXT */}
      <div 
        className={`wellness-section site-context ${visibleElements["siteContext"] ? "float-in-active" : ""}`}
        data-animate-id="siteContext"
      >
        <h2 className="section-title">Site Context and Concept</h2>
        <div className="context-layout">
          <img src={siteContext1} alt="" />
          <div className="context-right">
            <img src={siteContext2} alt="" />
            <img src={siteContext3} alt="" />
            <img src={siteContext4} alt="" />
          </div>
        </div>
      </div>

      {/* USER GROUPS */}
      <div 
        className={`wellness-section user-experience ${visibleElements["userExp"] ? "float-in-active" : ""}`}
        data-animate-id="userExp"
      >
        <h2 className="section-title">User Groups & Journey</h2>
        <div className="two-col">
          <img src={userGroups} alt="" />
          <img src={userJourney} alt="" />
        </div>
      </div>

      {/* TRANSFORMATION */}
      <div 
        className={`wellness-section transform-experience ${visibleElements["transform"] ? "float-in-active" : ""}`}
        data-animate-id="transform"
      >
        <div className="transform-layout">
          <img src={placeholderImg} alt="" />
          <div className="transform-right">
            <p>A mother's journey after pregnancy is deeply personal and varies from one individual to another, yet it often unfolds through similar emotional and physical phases. These stages—ranging from healing and nurturing to rediscovering oneself—are shaped by numerous factors such as cultural context, support systems, and individual resilience. This journey is rarely linear; instead, it flows with moments of progress, setbacks, and transformation. In architecture, this complexity can be reflected through non-linear spatial narratives that embrace curves, transitions, and layers—mirroring the organic and evolving nature of a mother's postnatal experience.</p>
          </div>
        </div>
      </div>

      {/* CONCEPT DIAGRAMS */}
      <div 
        className={`wellness-section concept-diagrams ${visibleElements["conceptDiag"] ? "float-in-active" : ""}`}
        data-animate-id="conceptDiag"
      >
        <h2 className="section-title">Spatial Concept and Privacy</h2>
        <div className="two-col">
          <figure className="concept-item">
            <img src={conceptFlow1} alt="" />
            <figcaption>Taking the concept into the site, the architectural form naturally followed, adopting an organic shape that creates a flowing, intuitive user journey. This fluid form not only symbolizes emotional expression but also enhances spatial experience by allowing seamless movement throughout the center.</figcaption>
          </figure>
          <figure className="concept-item">
            <img src={conceptFlow2} alt="" />
            <figcaption>The curvilinear design offers optimal views of the beachfront, while also enabling effective zoning—organizing the layout into public, semi-private, and private areas. These zones are all anchored by a central space that acts as the starting point of the user journey, offering individuals the freedom to navigate and choose their path through the wellness center.</figcaption>
          </figure>
        </div>
      </div>

      {/* ENVELOPE */}
      <div 
        className={`wellness-section sections-envelope ${visibleElements["envelope"] ? "float-in-active" : ""}`}
        data-animate-id="envelope"
      >
        <h2 className="section-title">Envelope Strategies & Climate Response</h2>
        <div className="two-col envelope-layout">
          <img src={sectionDiag1} alt="" />
          <div>
            <img src={sectionDiag2} alt="" />
            <p className="envelope-caption">Combining the culture, privacy and the climatic conditions, Different screening were placed toprotect the site throughout from the parking and walkway shading and the spaces indoor from harsh direct sunliught.

The triangle also called al-Faragat was used triangles in islam symbolizes the three world, reflecting holistic views. These triangles were used in different ways throughout the site.</p>
          </div>
        </div>
      </div>

      {/* DESIGN STRATEGIES */}
      <div 
        className={`wellness-section design-strategies ${visibleElements["designStrat"] ? "float-in-active" : ""}`}
        data-animate-id="designStrat"
      >
        <h2 className="section-title">Design Strategies</h2>

        <div className="big-image-row">
          <img src={bigAxon1} alt="" />
          <p className="big-image">The main entrance is designed to begin with a dedicated guest parking area, which includes a convenient drop-off zone for those who are only briefly stopping. Separate entrances have been provided for staff and guests to ensure smooth circulation and maintain privacy and security.

Across the entire site, multiple shaded seating areas are thoughtfully placed to enhance comfort and usability, even during hotter parts of the day. These seating zones also serve as informal meeting points or social nodes, encouraging interaction and community-building in a relaxed, welcoming environment.</p>
        </div>

        <div className="big-image-row">
          <img src={bigAxon2} alt="" />
          <p className="big-image-1">The overall design aimed to seamlessly integrate privacy, inclusivity, and cultural appropriateness while thoughtfully responding to the harsh climate of Oman. Each zone was carefully planned to ensure maximum user comfort, with features tailored to both environmental and social needs.

Climate-responsive strategies, such as strategic shading techniques, passive cooling, and orientation, were employed to create thermally comfortable spaces throughout the day. In addition, sensory zones were incorporated to enhance user experience—offering moments of calm, stimulation, or reflection, depending on the needs of the individual. By blending environmental sensitivity with cultural and emotional awareness, the design ensures that all users feel welcome, respected, and at ease within the space.</p>
        </div>
      </div>

      {/* AXO 1 */}
      <div 
        className={`wellness-section axo-section ${visibleElements["axo1"] ? "float-in-active" : ""}`}
        data-animate-id="axo1"
      >
        <div className="axo-grid">
          <img src={axo1} alt="" />
          <img src={axo2} alt="" />
        </div>
      </div>

      {/* AXO 2 */}
      <div 
        className={`wellness-section axo-section ${visibleElements["axo2"] ? "float-in-active" : ""}`}
        data-animate-id="axo2"
      >
        <div className="axo-grid">
          <img src={axo3} alt="" />
          <img src={axo4} alt="" />
        </div>
      </div>

      {/* EXPLODED */}
      <div 
        className={`wellness-section exploded-section ${visibleElements["exploded"] ? "float-in-active" : ""}`}
        data-animate-id="exploded"
      >
        <div className="exploded-wrapper">
          <img className="exploded-img" src={explodedView} alt="Exploded View" />
          <div className="floor-stack">
            <img className="floor-img" src={floor1} alt="Floor 1" />
            <img className="floor-img" src={floor2} alt="Floor 2" />
          </div>
        </div>
      </div>

      {/* CIRCLES */}
      <div 
        className={`wellness-section circles-section ${visibleElements["circles"] ? "float-in-active" : ""}`}
        data-animate-id="circles"
      >
        <div className="circles-grid">
          <div className="circle-item">
            <img src={circle1} alt="" />
            <p>Strategic openings and sightlines ensure that users feel a comforting sense of connection while still maintaining personal privacy.This design approach fosters a sense of community, allowing for incidental interactions and visual connections between users—particularly beneficial for mothers and families. Such a layout encourages parallel learning, where individuals can observe and learn from one another in a natural, non-intrusive manner.</p>
          </div>
          <div className="circle-item">
            <img src={circle2} alt="" />
            <p>The corridors were intentionally designed as nodes of interaction, encouraging spontaneous encounters and fostering a sense of community. These transitional spaces promote parallel learning, where individuals—especially mothers and families—can observe, learn from, and support one another.</p>
          </div>
          <div className="circle-item">
            <img src={circle3} alt="" />
            <p>Beyond functionality, the layout with such connecting nodes nurtures emotional well-being by reducing feelings of isolation and encouraging shared experiences. It subtly reinforces the idea that others are navigating similar life journeys, which helps build a sense of mutual support and reassurance. In turn, this creates an inviting atmosphere for informal knowledge exchange and the formation of new friendships.</p>
          </div>
        </div>
      </div>

      {/* CORRIDOR */}
      <div 
        className={`wellness-section corridor-section ${visibleElements["corridor"] ? "float-in-active" : ""}`}
        data-animate-id="corridor"
      >
        <div className="single-wide-image"><img src={corridorImg} alt="" /></div>
      </div>

      {/* GALLERY */}
      <div 
        className={`wellness-section gallery-strip ${visibleElements["gallery"] ? "float-in-active" : ""}`}
        data-animate-id="gallery"
      >
        <div className="thumb-grid">
          <img src={gallery1} alt="" />
          <img src={gallery2} alt="" />
          <img src={gallery3} alt="" />
          <img src={gallery4} alt="" />
          <img src={gallery5} alt="" />
          <img src={gallery6} alt="" />
        </div>
      </div>

      {/* FINAL SECTION */}
      <div 
        className={`wellness-section final-section ${visibleElements["finalSec"] ? "float-in-active" : ""}`}
        data-animate-id="finalSec"
      >
        <div className="single-wide-image"><img src={finalSectionImg} alt="" /></div>
      </div>

    </div>
  );
};

export default Wellness;