import React from "react";
import "./styles.css";

function Carders(props) {
  return (
    <>
      <div className="divMainCont">
        <h2 className="Heading">{props.showName}</h2>
        <img className="imageSrc" src={props.imgSrc} alt="randomImages" />
        <p className="paraStyle">{props.zoner}</p>
        <a href={props.watchLink} target="_blank" rel="noreferrer">
          watch now
        </a>
      </div>
    </>
  );
}

export default Carders;
