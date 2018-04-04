import React from "react";
import CardBtn from "../CardBtn";
import "./Card.css";

const Card = props => (
  <div>
   <div
    className="card"
    style={{
      backgroundImage: props.image ? `url(${props.image})` : "none"
    }}
     >    
      <CardBtn
      style={{ opacity: props.kids ? 1 : 0 }}
      onClick={() => props.removeProvider(props.id)}       
      data-value="pass"
    />
    <CardBtn
      style={{ opacity: props.kids ? 1 : 0 }}
      onClick={() => props.saveMatch(props.id)}   
      data-value="pick"
    />
  </div>

  <div className="content">
     <ul>
        <li>
          <strong>Name:</strong> {props.name}
        </li>
        <li>
          <strong>Occupation:</strong> {props.occupation}
        </li>
        <li>
          <strong>Location:</strong> {props.location}
        </li>
      </ul>
    </div>
 
    </div>


);

export default Card;

