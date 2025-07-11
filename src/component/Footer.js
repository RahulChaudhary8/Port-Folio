import "./FooterStyles.css";

import React from "react";

import {
  FaFacebook,
  FaGithub,
  FaHome,
  FaInstagram,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-container">
          <div className="left">
            <div className="location">
              <FaHome
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              <div>
                <p>Delhi, Uttar Pradesh</p>
                <p>India</p>
              </div>
            </div>
            <div className="phone">
              <h4>
                {" "}
                <FaPhone
                  size={20}
                  style={{ color: "#fff", marginRight: "2rem" }}
                />
                8318576674, 8874011876
              </h4>
            </div>
            <div className="email">
              <h4>
                {" "}
                <FaMailBulk
                  size={20}
                  style={{ color: "#fff", marginRight: "2rem" }}
                />
                rahulchaudhary775285@gmail.com
              </h4>
            </div>
          </div>
          <div className="right">
            <h4>About Me</h4>
            <p>
              Hi, I'm Rahul Chaudhary and I have logical and strong foundation
              in software development. Proficient in Html, Css, Python, Php,
              Java, React, and JavaScript. Ability to translate business
              requirements into innovative software solutions. Excellent
              teamwork, interpersonal and communication skills. Looking to start
              a career as an entry-level professional with a reputed IT company.
            </p>
            <div className="social">
              <a
                href="https://www.facebook.com/rahul.mahi.18400"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook Profile"
              >
                <FaFacebook
                  size={30}
                  style={{ color: "#fff", marginRight: "1rem" }}
                />
              </a>
              <a
                href="https://www.instagram.com/rahul.chaudhary.18400?igsh=bzl4b2lka2V6MTh3"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Profile"
              >
                <FaInstagram
                  size={30}
                  style={{ color: "#fff", marginRight: "1rem" }}
                />
              </a>
              <a
                href="https://www.linkedin.com/in/rahul-chaudhary-b5899a197/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin
                  size={30}
                  style={{ color: "#fff", marginRight: "1rem" }}
                />
              </a>
              <a
                href="https://github.com/RahulChaudhary8"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
              >
                <FaGithub
                  size={30}
                  style={{ color: "#fff", marginRight: "1rem" }}
                />
              </a>
              <a
                href="https://wa.me/918318576674?text=Hello%20Rahul%2C%20I%20visited%20your%20portfolio"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
              >
                <FaWhatsapp
                  size={30}
                  style={{ color: "#fff", marginRight: "1rem" }}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="copy">
        <h4>Copyright || Rahul Chaudhary Portfolio 2025-26 ||</h4>
      </div>
    </>
  );
};

export default Footer;
