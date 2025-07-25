import React from "react";

import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import HeroImg2 from "../component/HeroImg2";
import PricingCard from "../component/PricingCard";
import Work from "../component/Work";

const Project = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2
        heading="PROJECTS"
        text="Some of my most recent works"
        description="I have worked on various fullstack applications using React, Node.js, and JavaScript. Below are some featured projects that demonstrate my frontend and backend skills."
      />
      <Work />
      <PricingCard />
      <Footer />
    </div>
  );
};
export default Project;
