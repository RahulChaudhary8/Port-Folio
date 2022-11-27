import "./PricingCardStyles.css";
import Profile from "../assets/Profiles.jpg";

import React from 'react';
import { Link } from "react-router-dom";

const PricingCard = () => {
  return (
    
     
    <div className="pricing">
      <h1 className="abo">About</h1>
      <div className="card-container">
        <div className="card">
          <div className="pro">
          <img className="into-img" src={Profile} alt="Profile" />
          </div>
            {/* <h3>Basic -</h3> */}
           
            {/* <p className="btc">Name - Rahul Chaudhary</p> */}
            <p>Name - Rahul Chaudhary</p>
            <p>Degree - Bachelor of Computer Application</p>
            <p>Father - Baijnath Chaudhary</p>
            <p>Mother - Sudha Devi</p>
            <p>Address - Agra, Uttar Pradesh</p>
            <p>Marital Status - Single</p>
            <p>Language - English, Hindi</p>
            <p>Hobies - Cooking Food, Listening Music</p>
            {/* <Link to="/contact" className="btn">Purchase Now</Link> */}
        </div>
        <div className="card">
            <h2>Skill</h2>
            {/* <span className="bar"></span> */}
            {/* <p className="btc"></p> */}
            <h6>Programming Language</h6>
            <p>Java || Python || JavaScript</p>
            <h6>Frontend Development</h6>
            <p>HTML || CSS || React || Bootstrap</p>
            <h6>Backend Development</h6>
            <p>Node.Js || Express</p>
            <h6>Database</h6>
            <p>MYSQl</p>
            <h6>Other Technology</h6>
            <p>Github || MS-Office</p>
            {/* <Link to="/contact" className="btn">Purchase Now</Link> */}
        </div>
        <div className="card">
            <h2>Education</h2>
            {/* <span className="bar"></span> */}
            {/* <p className="btc">$ 100</p> */}
            <h6>Bachelor of Computer Application-</h6>
            <p>Gautam Buddha University, Greater Noida, UP (2022) - 74.5%</p>
            <h6>HIGHER SECONDARY EDUCATION</h6>
            <p>Rais Ahmad Inter Collage, Itwa, Siddharth Nagar,UP (2019) - 68.2%</p>
            <h6>SECONDARY EDUCATION</h6>
            <p>Rais Ahmad Inter Collage, Itwa, Siddharth Nagar,UP (2017) - 83.83 %</p>
            {/* <Link to="/contact" className="btn">Purchase Now</Link> */}
        </div>
        <div className="card">
            <h2>Projects</h2>
            {/* <span className="bar"></span> */}
            {/* <p className="btc">$ 100</p> */}
            <h6>Music WebSites Design</h6>
            <Link to="/contact" className="btn">View</Link>
            <h6>Face Mask Detection Using Python</h6>
            <Link to="/contact" className="btn">View</Link>
            <h6>Virtual Paint Using Python</h6>
            <Link to="/contact" className="btn">View</Link>
            <h6>Snake Game</h6>
            <Link to="/contact" className="btn">View</Link>
            <h6>Resort Website</h6>
            <Link to="/contact" className="btn">View</Link>
            <h6>Restaurant Website</h6>
            <Link to="/contact" className="btn">View</Link>
        </div>
        <div className="card">
            <h2>Internship</h2>
            {/* <span className="bar"></span> */}
            {/* <p className="btc">$ 100</p> */}
            <h6>FullStack Development</h6>
            <p>Five Months FullStack Development Training Program with Timespro</p>
            <h6>Fontend Web Development.</h6>
            <p>Two months Frontend development Internship through Udemy.</p>
            <h6>Android Application Development</h6>
            <p>One month Successfull completed Android Application Developmen course through Greatlearning.</p>
            <h6>Barclays LifeSkill Program</h6>
            <p>Successfull completed LifeSkills Programe throgh GTT Foundation.</p>
            <h6>How to Prepair for an Interview? Program</h6>
            <p>Successfull completed How to Prepair for an Interview? throgh Greatlearning.</p>
            {/* <Link to="/contact" className="btn">Purchase Now</Link> */}
        </div>
      </div>
    </div>
   
  )
}

export default PricingCard
