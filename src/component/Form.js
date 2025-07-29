import "./FormStyles.css";
import React from "react";

const Form = () => {
  return (
    <div>
      <h1 className="cont">CONTACT ME</h1>
      <div className="form">
        <form action="https://formsubmit.co/only1734@gmail.com" method="POST">
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />
          <input
            type="hidden"
            name="_autoresponse"
            value="Thank you! We'll get back to you soon."
          />
          <label htmlFor="fullName">Full Name</label>
          <input
            id="fullName"
            type="text"
            name="name"
            placeholder="Enter your full name"
            required
          />

          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Enter your email"
            required
          />

          <label htmlFor="subject">Subject</label>
          <input
            id="subject"
            type="text"
            name="subject"
            placeholder="Enter subject"
            required
          />

          <label htmlFor="subject">Resume/Cover Letter Link</label>
          <input
            id="resume"
            type="text"
            name="resume"
            placeholder="Paste Your Link"
            required
          />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="6"
            placeholder="Type your message here"
            required
          ></textarea>

          <button className="btn" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
