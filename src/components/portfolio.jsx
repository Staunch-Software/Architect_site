import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/portfolio.css';

// Import your project images
import img1 from "../assets/wellness-hero.jpg"; // Concrete/Installation image
import img2 from "../assets/leafimg17.jpg"; // Holistic Retreat/Wellness Center
import img3 from "../assets/cascadia2.jpg"; // Echo to Embrace
import img4 from "../assets/echoimg5.jpg"; // LeafLife Hub
import img5 from "../assets/concreteimg17.jpg"; // Cascadia

const Portfolio = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [visibleProjects, setVisibleProjects] = useState(new Set());
  
  const cardRefs = useRef([]);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const projectId = Number(entry.target.getAttribute('data-id'));
            setVisibleProjects((prev) => new Set([...prev, projectId]));

            const img = entry.target.querySelector('.card-image');
            if (img && img.dataset.src) {
              img.src = img.dataset.src;
              img.classList.add('loaded');
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  // Updated projects array with your images
  const projects = [
    {
      id: 1,
      title: "A Holistic Retreat that supports the transition into Motherhood",
      
      image: img1 // Wellness Center rendering
    },
    {
      id: 2,
      title: "Leaf-Life Hub",
      image: img2 // Modern building with green roof
    },
    {
      id: 3,
      title: "Cascadia",
      image: img3 // Residential complex near water
    },
  
    {
      id: 5,
      title: "Concfab",
      image: img5 // Concrete bench/seating installation
    },
      {
      id: 4,
      title: "Echo to Embrace",
      image: img4 // Curved concrete walls installation
    },
  ];

  // Handle Navigation
  const handleProjectClick = (id) => {
    navigate(`/projects/${id}`);
  };

  return (
    <div className="portfolio-container">
      <div className="portfolio-header">
        <h1 className="portfolio-title">My Projects</h1>
        <p className="portfolio-subtitle">
          Explore my works to learn more about what I do.
        </p>
      </div>

      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <div
            key={project.id}
            ref={(el) => (cardRefs.current[index] = el)}
            data-id={project.id}
            className={`portfolio-card ${visibleProjects.has(project.id) ? 'loaded' : ''} ${hoveredCard === project.id ? 'hovered' : ''}`}
            onMouseEnter={() => setHoveredCard(project.id)}
            onMouseLeave={() => setHoveredCard(null)}
            onClick={() => handleProjectClick(project.id)}
            style={{ animationDelay: `${(index % 2) * 0.1}s` }}
          >
            <div className="card-image-wrapper">
              <img 
                data-src={project.image}
                alt={project.title} 
                className="card-image lazy"
              />
              <div className="card-overlay">
                <div className="card-content">
                  <span className="card-category">{project.category}</span>
                  <h3 className="card-title">{project.title}</h3>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;