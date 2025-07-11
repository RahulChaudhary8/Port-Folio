import "./HeroImg2Styles.css";

import React, { Component } from "react";

class HeroImg2 extends Component {
  render() {
    return (
      <div className="hero-img">
        <div className="heading">
          <h1 className="animated-delay"> {this.props.heading} </h1>
          <h4 className="animated-delay">{this.props.text}</h4>
          <h4 className="animated-delay">{this.props.description}</h4>
        </div>
      </div>
    );
  }
}

export default HeroImg2;
