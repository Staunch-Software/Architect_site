import React, { useEffect } from "react";
import "../styles/CursorGlow.css";
import cursorSVG from "../assets/cursor.svg";

const CursorGlow = () => {
  useEffect(() => {
    const cursor = document.querySelector(".cursor-svg");
    const glow = document.querySelector(".cursor-glow");

    const moveCursor = (e) => {
      const x = e.clientX;
      const y = e.clientY;

      cursor.style.left = x + "px";
      cursor.style.top = y + "px";

      glow.style.left = x + "px";
      glow.style.top = y + "px";
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <>
      <img src={cursorSVG} alt="cursor" className="cursor-svg" />
      <div className="cursor-glow"></div>
    </>
  );
};

export default CursorGlow;
