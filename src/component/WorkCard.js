import "./WorkCardStyles.css";
import React from "react";

const WorkCard = (props) => {
  return (
    <div className="project-card">
      <img src={props.imgsrc} alt={props.title} />
      <h2 className="project-title">{props.title}</h2>
      <div className="pro-details">
        <p>{props.text}</p>
        <div className="pro-btns">
          <a
            href={props.view}
            className="btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            View
          </a>
          <a
            href={props.source}
            className="btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Source
          </a>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
