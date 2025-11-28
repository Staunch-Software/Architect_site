import React, { useState, useEffect, useRef } from 'react';
import '../styles/Cascadia.css';

// IMAGES
import cascadia1 from '../assets/cascadia1.jpg';
import cascadia2 from '../assets/cascadia2.jpg';
import cascadia3 from '../assets/cascadia3.jpg';
import cascadia4 from '../assets/cascadia4.jpg';
import cascadia5 from '../assets/cascadia5.jpg';
import cascadia6 from '../assets/cascadia6.png';
import cascadia7 from '../assets/cascadia7.jpg';
import cascadia8 from '../assets/cascadia8.png';
import cascadia9 from '../assets/cascadia9.png';
import cascadia10 from '../assets/cascadia10.jpg';
import cascadia11 from '../assets/cascadia11.jpg';

const CascadiaWebsite = () => {
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
    // Scoped Container Class
    <div className="cascadia-container">

      {/* Header */}
      <header className="header">
        <h1
          className={`title ${visibleElements["title"] ? "slide-in-active" : ""}`}
          data-animate-id="title"
        >
          Cascadia
        </h1>
        <p
          className={`subtitle ${visibleElements["subtitle"] ? "slide-in-active" : ""}`}
          data-animate-id="subtitle"
        >
          Community Living of Haller's Point
        </p>
      </header>

      {/* Main Section */}
      <section className="main-content">
        <div className="content-grid">

          {/* Main Image */}
          <div
            className={`main-image-container ${visibleElements["mainImg"] ? "float-in-active" : ""}`}
            data-animate-id="mainImg"
          >
            <img
              src={cascadia1}
              alt="Cascadia Rendering"
              className="main-image"
            />
          </div>

          {/* Text and Thumbnails */}
          <div className="info-container">
            <div
              className={`description ${visibleElements["desc"] ? "fade-in-active" : ""}`}
              data-animate-id="desc"
            >
              <p>
                Nestled in Haller's Point of Astoria, this design aims to provide residents with a
                dynamic living experience, having access to outdoor space and circulation to
                easily move throughout the building. By creating a unique façade on the street, it encourages viewers to come
                into the project, taking in the inner courtyard and cascading terraces of the
                residential units. As the site continues, a landscape appears connecting the site to the river and looking onto
                Randall's Island Field and Robert F. Kennedy Bridge.
              </p>
              <p>
                Discover a residence where every level provides a new perspective and the inner
                courtyard becomes an oasis in the midst of the vibrant urban environment of
                Astoria Queens.
              </p>
            </div>

            <div className="thumbnails">
              <img
                src={cascadia2}
                className={`thumbnail ${visibleElements["thumb1"] ? "float-in-active" : ""}`}
                data-animate-id="thumb1"
                alt="Cascadia Aerial View"
              />
              <img
                src={cascadia3}
                className={`thumbnail ${visibleElements["thumb2"] ? "float-in-active" : ""}`}
                data-animate-id="thumb2"
                alt="Cascadia Courtyard View"
              />
            </div>
          </div>

        </div>
      </section>

      {/* Design Process */}
      <section className="design-process">
        <div
          className={`site-plan-container ${visibleElements["sitePlan"] ? "float-in-active" : ""}`}
          data-animate-id="sitePlan"
        >
          <img src={cascadia4} className="site-plan" alt="Site Plan" />
        </div>

        <div className="process-diagrams">
          <div
            className={`diagram-item ${visibleElements["diagram1"] ? "float-in-active" : ""}`}
            data-animate-id="diagram1"
          >
            <img src={cascadia5} alt="Original Project Mass" />
          </div>
        </div>
      </section>

      {/* Model Section */}
      <div
        className={`model-section ${visibleElements["model"] ? "float-in-active" : ""}`}
        data-animate-id="model"
      >
        <img src={cascadia6} className="model-image" alt="Physical Model" />
      </div>

      {/* Site Details */}
      <div className="site-details">
        <div
          className={`site-plan-detailed ${visibleElements["detailPlan"] ? "float-in-active" : ""}`}
          data-animate-id="detailPlan"
        >
          <img src={cascadia7} className="detailed-plan" alt="Detailed Site Plan" />
        </div>
        <div
          className={`spaces-diagram ${visibleElements["wheel"] ? "float-in-active" : ""}`}
          data-animate-id="wheel"
        >
          <img src={cascadia8} className="wheel-diagram" alt="Spaces Wheel Diagram" />
        </div>
      </div>

      {/* Floor Plans */}
      <section className="floor-plans">
        <div
          className={`plans-container ${visibleElements["floorPlan"] ? "float-in-active" : ""}`}
          data-animate-id="floorPlan"
          style={{ animationDelay: "0s" }}
        >
          <img src={cascadia9} className="floor-plan-image" alt="Floor Plans" />
        </div>

        <div
          className={`program-text ${visibleElements["programText"] ? "fade-in-active" : ""}`}
          data-animate-id="programText"
          style={{ animationDelay: "0.8s" }}
        >
          <div className="para-wrap para-1">
    <p>
      These living units are organized around a single corridor with pathways
      for residents on the other sides of units, creating the cascading terraces.
      In between the two buildings, there is a central atrium that connects the
      residential areas and introduces one into the building.
    </p>
  </div>

  <div className="para-wrap para-2">
    <p>
      There are also areas for physical activity like the sports fields and gym,
      allowing users to consider improving their health while on our site.
    </p>
  </div>

  <div className="para-wrap para-3">
    <p>
      The residential units start on the third floor with the studios arranged
      on the first floor, while the one-, two-, and three-bedrooms are located
      on the upper floors. That way, it accommodates the different family types
      living in the space.
    </p>
  </div>

  <div className="para-wrap para-4">
    <p>
      The abundance of first floor amenities can be used by users of different
      ages and backgrounds. This provides a community environment where residents
      and visitors can engage, socialize, and connect.
    </p>
  </div>
        </div>
      </section>

      {/* Elevations */}
      <section className="elevations">
        <img
          src={cascadia10}
          className={`elevation-image ${visibleElements["elev1"] ? "float-in-active" : ""}`}
          data-animate-id="elev1"
          alt="Building Elevation 1"
        />
        <img
          src={cascadia11}
          className={`elevation-image ${visibleElements["elev2"] ? "float-in-active" : ""}`}
          data-animate-id="elev2"
          alt="Building Elevation 2"
        />
      </section>
      {/* --------------------------- PAGE NAVIGATION BUTTONS --------------------------- */}
      <section className="echo-page-navigation-1">
  <button className="echo-page-nav-btn echo-prev-page prev-btn-unique">
    <span>‹</span>
  </button>
</section>

<section className="echo-page-navigation-1">
  <button className="echo-page-nav-btn echo-next-page next-btn-unique">
    <span>›</span>
  </button>
</section>

    </div>
  );
};

export default CascadiaWebsite;