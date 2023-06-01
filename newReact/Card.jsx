import React from "react";
import "./styles.css";
export default function Cards(props) {
  return (
    <>
      {/* <div className="cards"> */}
      <div className="card">
        <img className="cardImg" src={props.imgsrc} alt="img" />
        <div className="cardInfo">
          <span className="category">{props.title}</span>
          <h3 className="movieName">{props.sname}</h3>
          <a href={props.link} target="_blank">
            <button className="movieButton">Watch Now</button>
          </a>
        </div>
      </div>
      {/* </div> */}
    </>
  );
}
