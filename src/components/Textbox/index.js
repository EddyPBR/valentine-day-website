import React from "react";
import "./styles.css";

const Textbox = ({
  title, 
  subtitle,
  textArray,
}) => {
  return (
    <div className="main-box">
      <header>
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
      </header>
      {textArray.map( (text) => (<p>{text}</p>) )}
    </div>
  );
};

export default Textbox;
