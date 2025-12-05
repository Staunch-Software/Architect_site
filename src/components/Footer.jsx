import resumeFile from "../assets/resume.jpg"; 
import React, { useEffect, useRef, useState } from "react";

const Footer = () => {
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
    <>
      <style>{`
        .footer {
          background: linear-gradient(135deg, #1a0b2e 0%, #2d1b4e 25%, #4a1c6b 50%, #1a0b2e 100%);
          color: #ffffff;
          padding: 4rem 2rem 2rem;
          position: relative;
          overflow: hidden;
        }

        .decorative-circle {
          position: absolute;
          width: 500px;
          height: 500px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(168, 85, 247, 0.2) 0%, transparent 70%);
          top: -250px;
          right: -250px;
          pointer-events: none;
          animation: pulse 4s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.3;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.5;
          }
        }

        .footer-content {
          max-width: 1400px;
          margin: 0 auto;
          width: 100%;
          position: relative;
          z-index: 1;
        }

        .top-section {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          margin-bottom: 4rem;
          align-items: start;
        }

        .left-column {
          opacity: 0;
          transform: translateX(-50px);
          transition: all 0.8s ease;
        }

        .left-column-active {
          opacity: 1;
          transform: translateX(0);
        }

        .project-text {
          font-size: 1.1rem;
          color: rgba(255, 255, 255, 0.7);
          margin-bottom: 1rem;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .main-heading {
          font-size: 4rem;
          font-weight: 800;
          color:white;
          margin-bottom: 1.5rem;
          line-height: 1.2;
        }

        .subtext {
          font-size: 1.2rem;
          color: rgba(255, 255, 255, 0.85);
          line-height: 1.6;
        }

        .right-column {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          opacity: 0;
          transform: translateX(50px);
          transition: all 0.8s ease 0.2s;
        }

        .right-column-active {
          opacity: 1;
          transform: translateX(0);
        }

        .contact-card {
          background: rgba(168, 85, 247, 0.1);
          border-radius: 16px;
          padding: 1.5rem;
          border: 2px solid rgba(168, 85, 247, 0.3);
          transition: all 0.3s ease;
          cursor: pointer;
          text-decoration: none;
          display: block;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        }

        .contact-card:hover {
          background: rgba(168, 85, 247, 0.2);
          border: 2px solid rgba(168, 85, 247, 0.6);
          transform: translateY(-8px);
          box-shadow: 0 8px 25px rgba(168, 85, 247, 0.3);
        }

        .card-label {
          font-size: 1.5rem;
          color: #d8b4fe;
          margin-bottom: 0.5rem;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          font-weight: 700;
        }

        .card-value {
          font-size: 1.1rem;
          color: #ffffff;
          font-weight: 500;
        }

        .divider {
          width: 100%;
          height: 2px;
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(168, 85, 247, 0.5) 50%,
            transparent 100%
          );
          margin: 3rem 0;
        }

        .bottom-section {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .copyright {
          font-size: 1rem;
          color: rgba(255, 255, 255, 0.6);
        }

        .card-label svg {
          width: 45px;
          height: 45px;
          border-radius: 50%;
          transition: all 0.3s ease;
        }

        .card-label svg circle {
          transition: all 0.3s ease;
        }

        .contact-card:hover .card-label svg {
          transform: translateY(-2px) scale(1.05);
          filter: drop-shadow(0 4px 8px rgba(255, 255, 255, 0.3));
        }

        .icon-with-text {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          color: inherit;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .icon-with-text:hover svg {
          transform: translateY(-3px) scale(1.1);
          filter: drop-shadow(0 6px 12px rgba(168, 85, 247, 0.8));
        }

        .icon-with-text:hover svg circle {
          fill: #a855f7;
        }

        .icon-with-text:hover svg path {
          fill: #ffffff;
        }

        .icon-with-text:hover .card-label-text {
          color: #ffffff;
        }

        .card-label-text {
          font-size: inherit;
          color: inherit;
          text-transform: inherit;
          letter-spacing: inherit;
          font-weight: inherit;
          font-weight: 700; 
        }

        .connect-text {
          color: #ffffff;
          font-size: 1.2rem;
          line-height: 2rem;
          display: inline-block;
        }

        @media (max-width: 968px) {
          .top-section {
            grid-template-columns: 1fr;
            gap: 3rem;
          }

          .main-heading {
            font-size: 3rem;
          }

          .left-column,
          .right-column {
            transform: translateY(30px);
          }

          .left-column-active,
          .right-column-active {
            transform: translateY(0);
          }
        }

        @media (max-width: 640px) {
          .footer {
            padding: 3rem 1.5rem 1.5rem;
          }

          .main-heading {
            font-size: 2.5rem;
          }

          .project-text {
            font-size: 0.95rem;
          }

          .subtext {
            font-size: 1rem;
          }

          .card-value {
            font-size: 1.1rem;
          }

          .decorative-circle {
            width: 250px;
            height: 250px;
            top: -125px;
            right: -125px;
          }
        }
      `}</style>

      <footer className="footer">
        <div className="decorative-circle"></div>

        <div className="footer-content">
          <div className="top-section">
            {/* Left Column */}
            <div
              className={`left-column ${
                visibleElements["left-column"] ? "left-column-active" : ""
              }`}
              data-animate-id="left-column"
            >
              <p className="project-text">Got a project in mind?</p>
              <h2 className="main-heading">Let's Create Something Great</h2>
              <p className="subtext">
                Ready to bring your ideas to life? I'm here to help turn your
                vision into reality.
              </p>
            </div>

            {/* Right Column */}
            <div
              className={`right-column ${
                visibleElements["right-column"] ? "right-column-active" : ""
              }`}
              data-animate-id="right-column"
            >
              {/* Resume Card */}
              <a
                href={resumeFile} 
                className="contact-card"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="card-label">Resume</div>
                <div className="card-value">View My Resume</div>
              </a>
                    
                    
               

              {/* LinkedIn + Email Card */}
              <div className="contact-card">
                {/* Logos + texts */}
                <div
                  className="card-label"
                  style={{ display: "flex", alignItems: "center", gap: "16px" }}
                >
                   {/* Connect text in white, larger */}
                <span className="connect-text">Connect With Me</span>

                  {/* LinkedIn logo + text */}
                  <a 
                    href="https://www.linkedin.com/in/sehba99"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon-with-text"
                  >
                    <svg
                      viewBox="0 0 48 48"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="24" cy="24" r="24" fill="white"/>
                      <path d="M20.4 19.6h-3.6v11.6h3.6V19.6zm-1.8-1.2c1.2 0 2.1-.9 2.1-2.1s-.9-2.1-2.1-2.1-2.1.9-2.1 2.1.9 2.1 2.1 2.1zm13.8 13.8h-3.6v-5.6c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9v5.7h-3.6V19.6h3.4v1.6h.1c.5-.9 1.6-1.8 3.4-1.8 3.6 0 4.3 2.4 4.3 5.5v6.3z" fill="#1a0b2e"/>
                    </svg>
                    <span className="card-label-text">LinkedIn</span>
                  </a>

                  {/* Email logo + text */}
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=sehbas99@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon-with-text"
                    >
                    <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="24" cy="24" r="24" fill="white" />
                        <path
                        d="M34 16H14c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2V18c0-1.1-.9-2-2-2zm0 4l-10 6-10-6v-2l10 6 10-6v2z"
                        fill="#1a0b2e"
                        />
                    </svg>
                    <span className="card-label-text">Email</span>
                    </a>
                </div>

              </div>

              {/* Location Card */}
              <div className="contact-card">
                <div className="card-label">Location</div>
                <div className="card-value">
                  Jersey City,
                  <br />
                  New Jersey
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="divider"></div>

          {/* Bottom Section */}
          <div className="bottom-section">
            <p className="copyright">© 2025 by Sehba Hussaina</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;