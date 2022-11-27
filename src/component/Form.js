import "./FormStyles.css";

import React from 'react';

const Form = () => {
  return (
    <div>
      <h1 className="cont">CONTACT ME</h1>
    <div className="form">
        <form action="https://formsubmit.co/only1734@gmail.com" method="POST">
            <label>Full Name</label>
            <input type="text" required></input>
            <label>Email</label>
            <input type="email" required></input>
            <label>Subject</label>
            <input type="text" required></input>
            <label>Message</label>
            <textarea rows="6" placeholder="Type your message here"></textarea>
            <button className="btn">Submit</button>
        </form>
    </div>
    </div>
  )
}

export default Form;
