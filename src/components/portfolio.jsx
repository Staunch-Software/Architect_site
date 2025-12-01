import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../styles/portfolio.css';

const Portfolio = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [visibleProjects, setVisibleProjects] = useState(new Set());
  
  const cardRefs = useRef([]);
  const navigate = useNavigate(); // Initialize hook

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

  // Updated to 5 Projects matching your specific files
  const projects = [
    {
      id: 1,
      title: "Holistic Retreat",
      category: "Wellness",
      // You can replace these URLs with your specific project thumbnails if you have them imported
      image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&h=600&fit=crop"
    },
    {
      id: 2,
      title: "LeafLife Hub",
      category: "Sustainability",
      image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=800&h=600&fit=crop"
    },
    {
      id: 3,
      title: "Cascadia",
      category: "Residential",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop"
    },
    {
      id: 4,
      title: "Echo to Embrace",
      category: "Installation",
      image: "https://images.unsplash.com/photo-1519915212116-7cfef71f1d3e?w=800&h=600&fit=crop"
    },
    {
      id: 5,
      title: "Concfab",
      category: "Fabrication",
      image: "https://images.unsplash.com/photo-1567016432779-094069958ea5?w=800&h=600&fit=crop"
    }
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
            onClick={() => handleProjectClick(project.id)} // Add Click Event
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