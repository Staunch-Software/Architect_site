import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./Projects.css";

import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.jpg";

const sections = [
  {
    id: "project-1",
    img: img4,
    title: " Holistic Retreat",
    text: "This project explores the challenges new mothers face during the postpartum period and focus on designing a postpartum and rejuvenation center for new mothers and their infants. The facility will support postpartum recovery by offering a nurturing space that promotes both physical healing and mental relaxation.",
    style: { height: "350px", width: "90%" }
  },
  {
    id: "project-2",
    img: img1,
    title: "Leaf-Life Hub",
    text: "leaf-life hub is a food recycling center committed to regeneration. by collecting and processing food waste from restaurants and residents, it transforms discarded materials into nutrient-rich fertilizers that help restore soil and support local agriculture. this effort creates a closed-loop system where recycled resources are continuously used to grow fresh food, reducing waste and strengthening community sustainability.",
    style: { height: "350px", width: "90%" }
  },
  {
    id: "project-5",
    img: img3,
    title: "Cascadia",
    text: "Nestled in Hallet’s Point of Astoria, this design aims to provide residents with a dynamic living experience, having access to outdoor space and circulation to easily move throughout the building. By creating a unique façade on the street, it encourages viewers to come into the project, taking in the inner courtyard and cascading terraces of the residential units.",
    style: { height: "350px", width: "85%" }
  },
  {
    id: "project-4",
    img: img2,
    title: "Echo to Embrace",
    text: "Nestled in Hallet’s Point of Astoria, this design aims to provide residents with a dynamic living experience, having access to outdoor space and circulation to easily move throughout the building. By creating a unique façade on the street, it encourages viewers to come into the project, taking in the inner courtyard and cascading terraces of the residential units.",
    style: { height: "350px", width: "85%" }
  },
  {
    id: "project-5",
    img: img5,
    title: "Concrete",
    text: "When specified for architectural applications, concrete is crafted with heightened attention to texture, color uniformity, joint layout, formwork precision, and surface finish. Techniques such as board-forming, polishing, sandblasting, acid etching, integral pigmentation, or exposed aggregate are employed to achieve the intended character—ranging from monolithic calm to expressive imprint.",
    style: { height: "350px", width: "95%" }
  
  },
];

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

      {/* ⭐ TITLE + IMAGE FIXED TOGETHER ⭐ */}
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

export default ProjectScrollStory;