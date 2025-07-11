import React from "react";

import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import HeroImg2 from "../component/HeroImg2";
import AboutContent from "../component/AboutContent";
import PricingCard from "../component/PricingCard";

const About = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2
        heading="ABOUT"
        text="I'm a creative Full Stack Developer who enjoys turning complex challenges into simple, beautiful, and intuitive web experiences."
        description="With expertise in technologies like React, Node.js, Express, and MongoDB, I build responsive and scalable web applications that deliver real value. I love learning new tools and writing clean, maintainable code."
      />

      <AboutContent />
      <PricingCard />
      <Footer />
    </div>
  );
};

export default About;
