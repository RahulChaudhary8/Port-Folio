import "./AboutContentStyles.css";

import React from 'react';
import { Link } from "react-router-dom";
import React1 from "../assets/h.jpg";
import React2 from "../assets/g.jpg";



const AboutContent = () => {
    return (
        <div className="about">
            <div className="left">
                <h1>Who Am I ?</h1>
                <p>Hi, I'm Rahul Chaudhary and I have logical and strong foundation in software development. Proficient in Html, Css, Python, Php, Java, React, and JavaScript. Excellent teamwork, interpersonal and communication skills. Looking to start a career as an entry-level professional with a reputed IT company.</p>

                <Link to="/contact">
                    <button className="btn">CONTACT</button>
                </Link>

            </div>
            <div className="right">
                <div className="img-container">
                    <div className="img-stack top">
                        <img src= {React1} className="img" alt="true" />
                    </div>
                    <div className="img-stack bottom">
                        <img src= {React2} className="img" alt="true" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutContent;
