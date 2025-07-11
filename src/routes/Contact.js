import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import HeroImg2 from "../component/HeroImg2";
import Form from "../component/Form";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2
        heading="CONTACT"
        text="Let's connect and build something amazing together!"
        description="Whether you have a question, want to start a project, or simply want to say hi — I’ll try my best to get back to you. Feel free to reach out via email, LinkedIn, or GitHub. I'm always open to new opportunities and collaborations."
      />

      <Form />
      <Footer />
    </div>
  );
};

export default Contact;
