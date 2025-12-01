import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../styles/ProjectNavigation.css";

const ProjectNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Correct project paths based on App.jsx
  const projects = [
    "/projects/1",  // Wellness
    "/projects/2",  // Leaf Life Hub
    "/projects/3",  // Cascadia
    "/projects/4",  // Echo
    "/projects/5",  // Concrete
  ];

  const currentIndex = projects.indexOf(location.pathname);

  const goPrev = () => {
    const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
    navigate(projects[prevIndex]);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goNext = () => {
    const nextIndex = (currentIndex + 1) % projects.length;
    navigate(projects[nextIndex]);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const backToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
return (
  <>
    {/* Arrows beside content */}
   <div className="project-nav-arrows">
  <button className="left-arrow-btn left-glass-btn" onClick={goPrev}>←</button>
  <button className="right-arrow-btn right-glass-btn" onClick={goNext}>→</button>
</div>

    {/* Back to top */}
    <div className="project-back-to-top">
      <button className="back-top-glass-btn" onClick={backToTop}>
        Back to Top ↑
      </button>
    </div>
  </>
);



};

export default ProjectNavigation;
