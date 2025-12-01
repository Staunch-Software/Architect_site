import React, { useState, useEffect, useRef } from 'react'; 
import '../styles/Leaf.css';

import Leaf1 from "../assets/leafimg1.jpg";
import Leaf2 from "../assets/leafimg2.jpg";
import Leaf3 from "../assets/leafimg3.jpg";
import Leaf4 from "../assets/leafimg4.jpg";
import Leaf5 from "../assets/leafimg5.jpg";
import Leaf6 from "../assets/leafimg6.jpg";
import Leaf7 from "../assets/leafimg7.jpg";
import Leaf8 from "../assets/leafimg8.jpg";
import Leaf9 from "../assets/leafimg9.jpg";
import Leaf10 from "../assets/leafimg10.jpg";
import Leaf11 from "../assets/leafimg11.jpg";
import Leaf12 from "../assets/leafimg12.jpg";
import Leaf13 from "../assets/leafimg13.jpg";
import Leaf14 from "../assets/leafimg14.jpg";
import Leaf15 from "../assets/leafimg15.jpg";
import Leaf16 from "../assets/leafimg16.jpg";
import Leaf17 from "../assets/leafimg17.jpg";
import Leaf18 from "../assets/leafimg18.jpg";
import Leaf19 from "../assets/leafimg19.jpg";
import Leaf20 from "../assets/leafimg20.jpg";
import Leaf21 from "../assets/leafimg21.jpg";
import Leaf22 from "../assets/leafimg22.jpg";
import Leaf23 from "../assets/leafimg23.jpg";
import Leaf24 from "../assets/leafimg24.jpg";
import Leaf25 from "../assets/leafimg25.jpg";
import Leaf26 from "../assets/leafimg26.jpg";
import Leaf27 from "../assets/leafimg27.jpg";
import Leaf28 from "../assets/leafimg28.jpg";
import Leaf29 from "../assets/leafimg29.jpg";
import Leaf30 from "../assets/leafimg30.jpg";
import Leaf31 from "../assets/leafimg31.jpg";
import Leaf32 from "../assets/leafimg32.jpg";
import Leaf33 from "../assets/leafimg33.jpg";
import Leaf34 from "../assets/leafimg34.jpg";
import Leaf37 from "../assets/leafimg37.jpg";
import Leaf36 from "../assets/leafimg36.jpg";
import Leaf40 from "../assets/leafimg40.jpg";
import Leaf41 from "../assets/leafimg41.jpg";
import Leaf42 from "../assets/leafimg42.jpg";
import Leaf43 from "../assets/leafimg43.jpg";
import Leaf44 from "../assets/leafimg44.jpg";
import Leaf45 from "../assets/leafimg45.jpg";
import Leaf46 from "../assets/leafimg46.jpg";
import Leaf47 from "../assets/leafimg47.jpg";
import Leaf48 from "../assets/leafimg48.jpg";
import Leaf51 from "../assets/leafimg51.jpg";
import Leaf52 from "../assets/leafimg52.jpg";
import Leaf53 from "../assets/leafimg53.jpg";

export default function LeafLifeHub() {
  const technicalScrollRef = useRef(null);
  const [technicalScrollIndex, setTechnicalScrollIndex] = useState(1);


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

  const heroImages = [Leaf17, Leaf18, Leaf19];
  
  const scrollLeft = () => {
    const container = document.querySelector('.horizontal-scroll-container');
    container.scrollBy({ left: -container.clientWidth, behavior: 'smooth' });
  };
  
  const scrollRight = () => {
    const container = document.querySelector('.horizontal-scroll-container');
    container.scrollBy({ left: container.clientWidth, behavior: 'smooth' });
  };

  const scrollTechnicalLeft = () => {
    if (technicalScrollRef.current) {
      const container = technicalScrollRef.current;
      const scrollAmount = container.offsetWidth / 2;
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      
      setTechnicalScrollIndex(prev => Math.max(1, prev - 1));
    }
  };

  const scrollTechnicalRight = () => {
    if (technicalScrollRef.current) {
      const container = technicalScrollRef.current;
      const scrollAmount = container.offsetWidth / 2;
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      
      setTechnicalScrollIndex(prev => Math.min(7, prev + 1));
    }
  };

  return (
    <div className="leaflife-container">

      {/* Hero Section */}
      <div 
        className={`leaf-hero ${visibleElements["hero"] ? "fade-in-active" : ""}`}
        data-animate-id="hero"
      >
        <div className="hero-grid">
          <div className="hero-text-left">
            <h1 className="main-title">LeafLife Hub</h1>
            <p className="subtitle">A recycling center</p>
          </div>

          <div className="hero-text-right">
            <p className="description-text">
              leaf-life hub is a food recycling center committed to regeneration. by collecting and processing food waste from restaurants and residents, it transforms discarded materials into nutrient-rich fertilizers that help restore soil and support local agriculture. this effort creates a closed-loop system where recycled resources are continuously used to grow fresh food, reducing waste and strengthening community sustainability.
            </p>
            <p className="description-text">
              within its permaculture-inspired environment, leaf-life hub cultivates a diverse range of plants, creating sensory-rich spaces that support a healthy and balanced ecosystem. this diversity promotes biodiversity, improves soil health, and encourages natural ecological interactions. through these regenerative practices, leaf-life hub not only reduces environmental impact but also nurtures greener, more resilient landscapes for the community.
            </p>
          </div>
        </div>

        {/* Hero Images Grid */}
        <div 
          className={`hero-images-grid ${visibleElements["heroImages"] ? "float-in-active" : ""}`}
          data-animate-id="heroImages"
        >
          <img src={heroImages[0]} alt="Main view" className="main-image" />
          <div className="side-images">
            <img src={heroImages[1]} alt="Interior view" className="small-image" />
            <img src={heroImages[2]} alt="Exterior view" className="small-image" />
          </div>
        </div>
      </div>

      {/* Process Flow Section */}
      <div 
        className={`section-gray ${visibleElements["processFlow"] ? "float-in-active" : ""}`}
        data-animate-id="processFlow"
      >
        <div className="content-wrapper">
          

          <div className="four-image-grid">
            <div className="grid-item">
              <img src={Leaf14} className="grid-image1" alt="Process 1" />
            </div>

            <div className="grid-item">
              <img src={Leaf10} className="grid-image2" alt="Process 2" />
            </div>

            <div className="grid-item">
              <img src={Leaf15} className="grid-image3" alt="Process 3" />
            </div>

            <div className="grid-item">
              <div className="scroll-wrapper">
                <button className="scroll-btn scroll-btn-left" onClick={scrollLeft}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <div className="horizontal-scroll-container">
                  <img src={Leaf9} className="grid-image" alt="Process 4-1" />
                  <img src={Leaf12} className="grid-image" alt="Process 4-2" />
                  <img src={Leaf11} className="grid-image" alt="Process 4-3" />
                  <img src={Leaf16} className="grid-image" alt="Process 4-4" />
                </div>
                <button className="scroll-btn scroll-btn-right" onClick={scrollRight}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 10 IMAGE STACK */}
      <div className="ten-images-stack">
        <img 
    src={Leaf46}
    className={`stack-image ${visibleElements["stack0"] ? "float-in-active" : ""}`}
    data-animate-id="stack0"
    alt=""
  />
  <div className="stack-section">
  <div className="stack-left">
    <img 
      src={Leaf48}
      className={`stack-image ${visibleElements["stack0.5"] ? "float-in-active" : ""}`}
      data-animate-id="stack0.5"
      alt=""
    />
  </div>
  
  <div className="stack-right">
    <p className="stack-text">
      The building was designed with careful consideration of the user journey—whether for individuals working within the center or visitors using its facilities. The layout ensures an intuitive flow while protecting privacy, so that private areas such as the hostels remain discreet and not easily visible, all while maintaining an accessible and user friendly interface.
    </p>
  </div>
</div>
        <img 
          src={Leaf7} 
          className={`stack-image ${visibleElements["stack1"] ? "float-in-active" : ""}`}
          data-animate-id="stack1"
          alt="" 
        />
        <div className="three-column-images">
          <div className="column-left">
            <img 
              src={Leaf31} 
              className={`stack-image ${visibleElements["stack-left"] ? "float-in-active" : ""}`}
              data-animate-id="stack-left"
              alt="Vegetative area statistics" 
            />
          </div>
          
          <div className="column-middle">
            <img 
              src={Leaf30} 
              className={`stack-image ${visibleElements["stack-middle"] ? "float-in-active" : ""}`}
              data-animate-id="stack-middle"
              alt="Site zones and layout" 
            />
          </div>
          
          <div className="column-right">
            <img 
              src={Leaf32} 
              className={`stack-image ${visibleElements["stack-right"] ? "float-in-active" : ""}`}
              data-animate-id="stack-right"
              alt="Community engagement metrics" 
            />
          </div>
        </div>
        <img 
  src={Leaf42}
  className={`stack-image ${visibleElements["stack1.5"] ? "float-in-active" : ""}`}
  data-animate-id="stack1.5"
  alt=""
/>
        
        
        {/* 3rd Image with Permaculture Content */}
        <div 
          className={`image-with-content ${visibleElements["permaculture"] ? "float-in-active" : ""}`}
          data-animate-id="permaculture"
        >
          <div className="image-content-left">
            <img src={Leaf40} className="stack-image" alt="" />
          </div>
          <div className="image-content-right">
            <p className="permaculture-title">Permaculture zones</p>
            <div className="zone-item">
              <p>Zone 0 - (home)</p>
              <p>Herbs like rosemary, thyme, vegetable garden</p>
            </div>
            <div className="zone-item">
              <p>Zone 1- (immediate surroundings)</p>
              <p>Fruit bushes like blueberries and black berries for regular harvesting</p>
            </div>
            <div className="zone-item">
              <p>Zone 2- ( productive gardens)</p>
              <p>Comfrey plants for nutrient accumulation, Peach, pear, fig</p>
            </div>
            <div className="zone-item">
              <p>Zone 3-( managed agriculture)</p>
              <p>Clover and rye for soil improvement</p>
            </div>
            <div className="zone-item">
              <p>Zone 4-(semi-wilderness)</p>
              <p>Native wildflowers like black eyed susans and coreopsis to attract pollinators and support local diversity</p>
            </div>
            <div className="zone-item">
              <p>Zone 5-(wilderness)</p>
              <p>Native plants like palmetto, wax myrtle, live oak. Southern magnolia to grow undisturbed to support local wildlife.</p>
            </div>
          </div>
        </div>

        <div className="two-column-layout">
          <div className="two-col-left">
            <img  
              src={Leaf34}  
              className={`stack-image ${visibleElements["stack4"] ? "float-in-active" : ""}`} 
              data-animate-id="stack4" 
              alt="Design for change"  
            />
          </div>
          
          <div className="two-col-right">
            <img  
              src={Leaf33}  
              className={`stack-image ${visibleElements["stack5"] ? "float-in-active" : ""}`} 
              data-animate-id="stack5" 
              alt="Building lifespan"  
            />
          </div>
        </div>

        
        <img 
          src={Leaf4} 
          className={`stack-image ${visibleElements["stack6"] ? "float-in-active" : ""}`}
          data-animate-id="stack6"
          alt="" 
        />

        <div className="two-column-split">
          <div className="split-left">
            <img 
              src={Leaf36} 
              className={`stack-image ${visibleElements["stack7"] ? "float-in-active" : ""}`}
              data-animate-id="stack7"
              alt="" 
            />
          </div>
          
          <div className="split-right">
            <img 
              src={Leaf37} 
              className={`stack-image ${visibleElements["stack8"] ? "float-in-active" : ""}`}
              data-animate-id="stack8"
              alt="" 
            />
          </div>
        </div>
        
        <img 
          src={Leaf1} 
          className={`stack-image ${visibleElements["stack9"] ? "float-in-active" : ""}`}
          data-animate-id="stack9"
          alt="" 
        />
        <img 
          src={Leaf6} 
          className={`stack-image ${visibleElements["stack10"] ? "float-in-active" : ""}`}
          data-animate-id="stack10"
          alt="" 
        />
        <img 
          src={Leaf5} 
          className={`stack-image ${visibleElements["stack11"] ? "float-in-active" : ""}`}
          data-animate-id="stack11"
          alt="" 
        />
        <img 
          src={Leaf44} 
          className={`stack-image ${visibleElements["stack11.5"] ? "float-in-active" : ""}`}
          data-animate-id="stack11.5"
          alt="" 
        />
        <img 
          src={Leaf47} 
          className={`stack-image ${visibleElements["stack12.5"] ? "float-in-active" : ""}`}
          data-animate-id="stack12.5"
          alt="" 
        />
        <img 
          src={Leaf28} 
          className={`stack-image ${visibleElements["stack12"] ? "float-in-active" : ""}`}
          data-animate-id="stack12"
          alt="" 
        />
        <img 
          src={Leaf41} 
          className={`stack-image ${visibleElements["stack13"] ? "float-in-active" : ""}`}
          data-animate-id="stack13"
          alt="" 
        />
        <img 
          src={Leaf43} 
          className={`stack-image ${visibleElements["stack14"] ? "float-in-active" : ""}`}
          data-animate-id="stack14"
          alt="" 
        />
      </div>

      {/* TECHNICAL DRAWING SECTION */}
      <div 
        className={`technical-section-wrapper ${visibleElements["technical"] ? "float-in-active" : ""}`}
        data-animate-id="technical"
      >
       

        <div className="technical-scroll-wrapper">
          <button className="technical-scroll-btn technical-scroll-btn-left" onClick={scrollTechnicalLeft}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <div className="technical-horizontal-scroll-container" ref={technicalScrollRef}>
            <img src={Leaf21} alt="Technical Drawing 1" className="technical-image" />
            <img src={Leaf51} alt="Technical Drawing 2" className="technical-image" />
            <img src={Leaf22} alt="Technical Drawing 2" className="technical-image" />
            <img src={Leaf53} alt="Technical Drawing 3" className="technical-image" />
            <img src={Leaf52} alt="Technical Drawing 3" className="technical-image" />
            <img src={Leaf20} alt="Technical Drawing 3" className="technical-image" />
            
            <img src={Leaf24} alt="Technical Drawing 4" className="technical-image" />
            <img src={Leaf25} alt="Technical Drawing 5" className="technical-image" />
           
            <img src={Leaf23} alt="Technical Drawing 7" className="technical-image tech23" />
          </div>
          <button className="technical-scroll-btn technical-scroll-btn-right" onClick={scrollTechnicalRight}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <div className="technical-scroll-indicator">{technicalScrollIndex}/7</div>
        </div>
      </div>
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
}