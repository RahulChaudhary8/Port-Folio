// import React from 'react'
import Navbar from "../component/Navbar";
import HeroImg from "../component/HeroImg";
import Work from "../component/Work";
import Footer from "../component/Footer";
import PricingCard from "../component/PricingCard";
import Form from "../component/Form";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroImg />
      <Work />
      <PricingCard />
      <Form />
      <Footer />
    </div>
  );
};

export default Home;
