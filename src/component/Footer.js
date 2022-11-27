import "./FooterStyles.css"

import React from 'react'

import { FaFacebook, FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
    return (
        <>
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                        <div>
                            <p>Agra, Uttar Pradesh</p>
                            <p>India</p>
                        </div>
                    </div>
                    <div className="phone">
                        <h4> <FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />8318576674, 8874011876</h4>
                    </div>
                    <div className="email">
                        <h4> <FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} />rahulchaudhary775285@gmail.com</h4>
                    </div>
                </div>
                <div className="right">
                    <h4>About Me</h4>
                    <p>Hi, I'm Rahul Chaudhary and I have logical and strong foundation in software development. Proficient in Html, Css, Python, Php, Java, React, and JavaScript. Ability to translate business requirements into innovative software solutions. Excellent teamwork, interpersonal and communication skills. Looking to start a career as an entry-level professional with a reputed IT company.</p>
                    <div className="social">
                        <FaFacebook size={30} style={{ color: "#fff", marginRight: "1rem" }} />
                        <FaTwitter size={30} style={{ color: "#fff", marginRight: "1rem" }} />
                        <FaLinkedin size={30} style={{ color: "#fff", marginRight: "1rem" }} />
                        <FaGithub size={30} style={{ color: "#fff", marginRight: "1rem" }} />
                        <FaWhatsapp size={30} style={{ color: "#fff", marginRight: "1rem" }} />

                    </div>
                </div>
            </div>
        </div>
            <div className="copy">
                <h4>Copyright || Rahul Chaudhary Portfolio 2022-23 ||</h4>
            </div>
        </>
    )
}

export default Footer
