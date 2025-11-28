import React, { useState, useEffect, useRef } from "react";
import "../styles/Echo.css";
import Image1 from "../assets/echoimg1.jpg";
import Image2 from "../assets/echoimg2.jpg";
import Image3 from "../assets/echoimg3.jpg";
import Image5 from "../assets/echoimg5.jpg";
import Image6 from "../assets/echoimg6.jpg";
import Image7 from "../assets/echoimg7.jpg";

import VideoFile from "../assets/final video 1.MP4";


function Echo() {
  const images = [
    {
      src:Image1,
      caption: "Transition space"
    },
    {
      src: Image2,
      caption: "Moving on to the open space, breaking out of the darkness"
    },
    {
      src: Image3,
      caption: "open space"
    },
    {
      src: Image5,
      caption: "pockets of light indicating ray of rope"
    },
    {
      src: Image6,
      caption: "Natural light integration"
    },
    {
      src:Image7,
      caption: "Entering through a solid wall with no light just darkness indicating negativity"
    }
  ];

  const [isCarouselOpen, setIsCarouselOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
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

  const openCarousel = (index) => {
    setCurrentSlide(index);
    setIsCarouselOpen(true);
  };

  const closeCarousel = () => {
    setIsCarouselOpen(false);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="echo-page">
      {/* --------------------------- Title Section --------------------------- */}
      <section className="echo-title-section">
        <h1
          className={`echo-fade-in ${visibleElements["title"] ? "echo-fade-in-active" : ""}`}
          data-animate-id="title"
        >
          Echo to Embrace
        </h1>
        <p 
          className={`echo-subtitle echo-fade-in ${visibleElements["subtitle"] ? "echo-fade-in-active" : ""}`}
          data-animate-id="subtitle"
        >
          Navigating the duality of thought
        </p>
      </section>

      {/* --------------------------- Description --------------------------- */}
      <section className="echo-description">
        <p
          className={`echo-slide-up ${visibleElements["desc"] ? "echo-slide-up-active" : ""}`}
          data-animate-id="desc"
        >
          Nestled in Hallet's Point of Astoria, this design aims to provide residents
          with a dynamic living experience, having access to outdoor space and circulation
          to easily move throughout the building. As the site continues, a landscape appears connecting the site to the river and
          looking onto Randall's Island Field and Robert F. Kennedy bridge. Discover a
          residence where every level provides a new perspective and the inner courtyard
          becomes an oasis in the midst of the vibrant urban environment of Astoria Queens.
        </p>
      </section>

      {/* --------------------------- Video Section --------------------------- */}
      <section className="echo-video-container">
        <video 
          className={`echo-video echo-reveal ${visibleElements["video"] ? "echo-reveal-active" : ""}`}
          data-animate-id="video"
          controls
          playsInline
        >
          <source src={VideoFile} type="video/mp4" />
        </video>
      </section>

      {/* --------------------------- HOVER IMAGE SLIDER --------------------------- */}
      <section className="echo-slider-container">
        {images.map((image, index) => (
          <div 
            key={index} 
            className={`echo-slide echo-slide-${index + 1}`}
            onClick={() => openCarousel(index)}
          >
            <img src={image.src} alt={`Echo ${index + 1}`} />
            <div className="echo-slide-caption">
              <p>{image.caption}</p>
            </div>
          </div>
        ))}
      </section>

      {/* --------------------------- CAROUSEL MODAL --------------------------- */}
      {isCarouselOpen && (
        <div className="carousel-modal">
          <div className="carousel-overlay" onClick={closeCarousel}></div>
          
          <div className="carousel-content">
            {/* Close Button */}
            <button className="carousel-close" onClick={closeCarousel}>
              ×
            </button>

            {/* Main Image with Caption */}
            <div className="carousel-main">
              <div className="carousel-image-wrapper">
                <img 
                  src={images[currentSlide].src} 
                  alt={`Slide ${currentSlide + 1}`}
                  className="carousel-image"
                />
                <div className="carousel-counter">
                  {currentSlide + 1} / {images.length}
                </div>
                <div className="carousel-caption-overlay">
                  {images[currentSlide].caption}
                </div>
              </div>

              {/* Navigation Arrows */}
              <button className="carousel-arrow carousel-prev" onClick={prevSlide}>
                ‹
              </button>
              <button className="carousel-arrow carousel-next" onClick={nextSlide}>
                ›
              </button>
            </div>

            {/* Thumbnail Navigation Dots */}
            <div className="carousel-dots">
              {images.map((_, index) => (
                <button
                  key={index}
                  className={`carousel-dot ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => goToSlide(index)}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Echo;