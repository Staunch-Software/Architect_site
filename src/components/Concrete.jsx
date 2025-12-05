import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import "../styles/Concrete.css";
import ProjectNavigation from './ProjectNavigation';

/* ===== IMPORT REAL IMAGES ===== */
import img2 from "../assets/concreteimg2.jpg";
import img4 from "../assets/concreteimg4.jpg";
import img5 from "../assets/concreteimg5.jpg";
import img6 from "../assets/concreteimg6.jpg";
import img7 from "../assets/concreteimg7.jpg";
import img8 from "../assets/concreteimg8.jpg";
import img9 from "../assets/concreteimg9.jpg";
import img10 from "../assets/concreteimg10.jpg";
import img11 from "../assets/concreteimg11.jpg";
import img12 from "../assets/concreteimg12.jpg";
import img13 from "../assets/concreteimg13.jpg";
import img14 from "../assets/concreteimg14.jpg";
import img15 from "../assets/concreteimg15.jpg";
import img16 from "../assets/concreteimg16.jpg";
import img17 from "../assets/concreteimg17.jpg";
import img18 from "../assets/concreteimg18.jpg";
import img19 from "../assets/concreteimg19.jpg";
import img20 from "../assets/concreteimg20.jpg";

const ConcreteBench = () => {

  const [currentImage, setCurrentImage] = useState(0);
  const [visibleElements, setVisibleElements] = useState({});
  const scrollContainerRef = useRef(null);
  const observerRef = useRef(null);

  /* ===== IMAGE LIST ===== */
  const originalImages = [
    { id: 5, src: img5, alt: "Concrete Bench Image 5" },
    { id: 6, src: img6, alt: "Concrete Bench Image 6" },
    { id: 7, src: img7, alt: "Concrete Bench Image 7" },
    { id: 8, src: img8, alt: "Concrete Bench Image 8" },
    { id: 9, src: img9, alt: "Concrete Bench Image 9" },
    { id: 10, src: img10, alt: "Concrete Bench Image 10" },
    { id: 11, src: img11, alt: "Concrete Bench Image 11" },
    { id: 12, src: img12, alt: "Concrete Bench Image 12" },
    { id: 13, src: img13, alt: "Concrete Bench Image 13" },
    { id: 14, src: img14, alt: "Concrete Bench Image 14" },
    { id: 15, src: img15, alt: "Concrete Bench Image 15" },
    { id: 16, src: img16, alt: "Concrete Bench Image 16" },
    { id: 17, src: img17, alt: "Concrete Bench Image 17" },
    { id: 18, src: img18, alt: "Concrete Bench Image 18" },
    { id: 19, src: img19, alt: "Concrete Bench Image 19" },
  ];

  const images = [...originalImages, ...originalImages, ...originalImages];

  /* ============================
     OBSERVE ELEMENT ANIMATIONS
  ============================ */
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

    const container = scrollContainerRef.current;
    if (container) {
      const imageWidth =
        container.querySelector(".gallery-image")?.offsetWidth + 20 || 0;

      const startIndex = originalImages.length;
      setCurrentImage(startIndex);
      container.scrollLeft = imageWidth * startIndex;
    }

    return () => observerRef.current?.disconnect();
  }, []);

  /* ============================
       BUTTON SCROLL
  ============================ */
  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const imageWidth =
      container.querySelector(".gallery-image").offsetWidth + 20;

    let newIndex = direction === "left" ? currentImage - 1 : currentImage + 1;

    setCurrentImage(newIndex);

    container.scrollTo({
      left: imageWidth * newIndex,
      behavior: "smooth",
    });
  };

  /* ============================
       TRUE INFINITE SCROLL
  ============================ */
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let isJumping = false;
    let timeout;

    const handleScroll = () => {
      if (isJumping) return;

      clearTimeout(timeout);
      timeout = setTimeout(() => {
        const imageWidth =
          container.querySelector(".gallery-image")?.offsetWidth + 20;
        if (!imageWidth) return;

        const scrollPos = container.scrollLeft;
        const setWidth = imageWidth * originalImages.length;

        if (scrollPos >= setWidth * 2) {
          isJumping = true;
          container.scrollLeft = scrollPos - setWidth;
          setCurrentImage((prev) => prev - originalImages.length);
          setTimeout(() => (isJumping = false), 50);
        }
        else if (scrollPos < setWidth) {
          isJumping = true;
          container.scrollLeft = scrollPos + setWidth;
          setCurrentImage((prev) => prev + originalImages.length);
          setTimeout(() => (isJumping = false), 50);
        }
      }, 20);
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  /* ============================
       DRAG / TOUCH DRAG
  ============================ */
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.pageX - scrollContainerRef.current.offsetLeft;
    scrollLeft.current = scrollContainerRef.current.scrollLeft;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleMouseLeave = () => {
    isDragging.current = false;
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.3;
    scrollContainerRef.current.scrollLeft = scrollLeft.current - walk;
  };

  /* ============================
         RENDER UI
  ============================ */
  return (
    <>
      <div className="concrete-page">

        {/* Hero Section */}
        <section className="concrete-hero">
          <h1
            className={`project-title ${visibleElements["title"] ? "slide-active" : ""}`}
            data-animate-id="title"
          >
            Concfab
          </h1>
          <p
            className={`project-subtitle ${visibleElements["subtitle"] ? "slide-active" : ""}`}
            data-animate-id="subtitle"
          >
            Thin shelled concrete bench
          </p>
        </section>

        {/* Sketches Section */}
        <section className="sketches-section">
          <div
            className={`sketches-grid ${visibleElements["sketch"] ? "expand-active" : ""}`}
            data-animate-id="sketch"
          >
            <img src={img2} alt="Sketch" className="technical-drawing-image1" />
          </div>
        </section>

        {/* Technical Drawings Section */}
        <section className="technical-section">
          <div
            className={`technical-drawing-container ${visibleElements["tech1"] ? "expand-active" : ""}`}
            data-animate-id="tech1"
          >
            <img src={img4} alt="Technical Drawing One" className="technical-drawing-image" />
          </div>

          <div
            className={`technical-drawing-container ${visibleElements["tech2"] ? "expand-active" : ""}`}
            data-animate-id="tech2"
          >
            <img src={img20} alt="Technical Drawing Two" className="technical-drawing-image" />
          </div>
        </section>

        {/* Gallery Section */}
        <section className="gallery-section">
          <div className="gallery-container">

            {/* Left Button */}
            <button className="scroll-button left" onClick={() => scroll("left")}>
              <ChevronLeft size={24} />
            </button>

            {/* Images */}
            <div
              className="images-wrapper"
              ref={scrollContainerRef}
              onMouseDown={handleMouseDown}
              onMouseLeave={handleMouseLeave}
              onMouseUp={handleMouseUp}
              onMouseMove={handleMouseMove}
              onTouchStart={(e) => handleMouseDown(e.touches[0])}
              onTouchEnd={handleMouseUp}
              onTouchMove={(e) => handleMouseMove(e.touches[0])}
            >
              {images.map((image, index) => (
                <div
                  key={`${image.id}-${index}`}
                  className={`gallery-image ${visibleElements[`gallery${index}`] ? "expand-active" : ""}`}
                  data-animate-id={`gallery${index}`}
                >
                  <img src={image.src} alt={image.alt} />
                </div>
              ))}
            </div>

            {/* Right Button */}
            <button className="scroll-button right" onClick={() => scroll("right")}>
              <ChevronRight size={24} />
            </button>

          </div>
        </section>

      </div>

      {/* Navigation OUTSIDE the concrete-page */}
      <ProjectNavigation />

    </>
  );
};

export default ConcreteBench;
