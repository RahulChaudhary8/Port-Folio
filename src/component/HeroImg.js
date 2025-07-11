import React, { useState, useEffect } from "react";
import "./HeroImgStyles.css";
import IntroImg from "../assets/portfolio.jpg";

const HeroImg = () => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [timer, setTimer] = useState(10);
  const fileLink =
    "https://drive.google.com/uc?export=download&id=10yfWU2to7y84qjL6xEm-bcEEvIEOBi0A";

  useEffect(() => {
    let countdown;
    if (isDownloading && timer > 0) {
      countdown = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else if (isDownloading && timer === 0) {
      clearInterval(countdown);
      window.location.href = fileLink;

      // Download ke 3 seconds baad button reset ho jaye
      setTimeout(() => {
        setIsDownloading(false);
        setTimer(10);
      }, 3000);
    }
    return () => clearInterval(countdown);
  }, [isDownloading, timer]);

  const handleDownload = () => {
    if (!isDownloading) {
      setIsDownloading(true);
      setTimer(10);
    }
  };

  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img" src={IntroImg} alt="IntroImg" />
      </div>
      <div className="content">
        <h4 className="animated-delay">Welcome to my portfolio</h4>
        <h4 className="animated-delay">HI, I'M RAHUL CHAUDHARY</h4>
        <h1 className="animated-delay">I'M A FULLSTACK DEVELOPER</h1>
        <div className="button-group">
          <a
            href="https://www.linkedin.com/in/rahul-chaudhary-b5899a197/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            LINKEDIN
          </a>

          <button onClick={handleDownload} className="btn">
            {isDownloading
              ? `Your download will begin in ${timer} seconds`
              : "RESUME"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
