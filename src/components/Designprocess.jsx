import React, { useEffect, useRef } from "react";
import "../styles/Designprocess.css";
import img1 from "../assets/process1.jpg";
import img2 from "../assets/process2.jpg";
import img3 from "../assets/process3.jpg";
import img4 from "../assets/process4.jpg";


const Designprocess = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const trigger = window.innerHeight * 0.8;

      cardsRef.current.forEach((card, index) => {
        if (!card) return;
        const cardTop = card.getBoundingClientRect().top;

        if (cardTop < trigger) {
          card.classList.add("visible");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="scroll-stack-container">

      <div className="design-hero">
        <div className="hero-content">
          <h1 className="hp-title">MY DESIGN PROCESS</h1>
          <h3>Creative Approach</h3>
          <p>Welcome to My Architecture Portfolio, where creativity and functionality converge to shape innovative spaces tailored to our clients' unique needs. Here is my typical Design Process.the core of my design philosophy is the belief that architecture should evoke emotion. A building is more than just a backdrop to daily life—it’s a space where people form memories, create bonds, and find inspiration.</p>
        </div>
      </div>

      <div className="scroll-stack">

     {/* CARD 1 */}
<div className="scroll-stack-card" ref={(el) => (cardsRef.current[0] = el)}>
  <img src={img1} alt="Step 1" className="stack-img stack-img-1" />
  <div className="dp-card-content">
    <p className="dp-card-desc">
In every project, I strive to create spaces that are more than just functional or aesthetically pleasing. I aim to design places that inspire, heal, connect, and nurture. Spaces that tell stories and help people connect with themselves and with one another. When form follows function, it’s not just about efficiency or logic—it’s about creating a deeper sense of belonging, a sense of place that feels authentic and resonant with its users.</p>
  </div>
</div>

{/* CARD 2 */}
<div className="scroll-stack-card second-card" ref={(el) => (cardsRef.current[1] = el)}>
  <img src={img2} alt="Step 2" className="stack-img" />
  <div className="dp-card-content">
    <h2 className="dp-card-title">Form Follows Function: The Enduring Principle of Great Architecture
</h2>
    <p className="dp-card-desc">Following Louis Sullivan’s timeless principle, form follows function, my design process begins with the journey of the user. I study how people move, interact, and feel within a space, allowing these insights to naturally inform the shape and character of my architecture.

My goal is to create spaces that evoke emotion, support functionality, and offer effortless navigation—spaces that guide rather than confuse, comfort rather than overwhelm.

I start by brainstorming and gathering detailed information about all required spaces. This includes developing precise measurements, analyzing area requirements, and ensuring that every square foot is intentionally used rather than wasted. By doing so, I make sure that each space not only serves its purpose but also enhances the user’s experience.

Ultimately, my design philosophy centers on crafting environments where users feel connected, comfortable, and grounded.</p>
  </div>
</div>

{/* CARD 3 */}
<div className="scroll-stack-card" ref={(el) => (cardsRef.current[2] = el)}>
  <img src={img3} alt="Step 3" className="stack-img" />
  <div className="dp-card-content">
    
    <p className="dp-card-desc">
As the design evolves, I begin translating these functional and emotional insights into spatial forms. Circulation paths, sightlines, and transitional zones become essential tools in shaping an intuitive user experience.

​​​

Through iterative sketches, models, and digital explorations, the architecture gradually takes shape. The spaces begin to reveal their own logic: areas that need openness expand; areas requiring privacy become more enclosed; zones meant for gathering adopt warmer, more inviting characteristics. This organic development ensures that the design is not forced, but rather grows naturally out of its purpose.

​​

Sustainability and efficiency also play a key role in my process. I aim to create designs that are not only user-focused, but also environmentally responsible—maximizing natural ventilation, optimizing daylight, and selecting materials that enhance durability and comfort. By integrating these elements early in the design, the project becomes holistically functional, not just visually pleasing.

​</p>
  </div>
</div>

{/* CARD 4 */}
<div className="scroll-stack-card" ref={(el) => (cardsRef.current[3] = el)}>
  <img src={img4} alt="Step 4" className="stack-img" />
  <div className="dp-card-content">

    <p className="dp-card-desc">
As I move through the design process, I place a significant emphasis on human-scale elements. The placement of windows, the height of ceilings, the warmth of materials, and the flow of air—each small detail contributes to an atmosphere where people feel not just accommodated, but inspired.

 

Whether it’s a cozy corner that encourages reflection or a large open area that invites collaboration, these intentional moments shape the way users connect with the space.

​

Moreover, I value adaptability. Life is dynamic, and the spaces we create should be able to grow with us. Flexibility is key—whether it’s through movable partitions, multifunctional furniture, or spaces designed to evolve over time. This ensures that the architecture can remain relevant and functional as the needs of the user change.</p>
  </div>
</div>


      </div>
    </div>
  );
};

export default Designprocess;
