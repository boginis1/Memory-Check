import React from "react";
import "./PupCard.css";

const PupCard = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.id} src={props.image} />
    </div>
    <div className="content">
      <ul>
        <li>
          <strong>Name:</strong> {props.img}
        </li>
        
      </ul>
    </div>
    <span onClick={() => props.shufflePups(props.id)} className="shufflee">
      𝘅
    </span>
  </div>
);

export default PupCard;
