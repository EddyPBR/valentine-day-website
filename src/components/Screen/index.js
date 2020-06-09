import React from "react";
import "./styles.css";

const Screen = (props) => {
  return (
    <div className="screen-full" style={{background: props.bgColor, color: props.textColor}}>
      <div className="container">
        <header>
          <img src={props.imageUrl} alt="simple gif" />
        </header>
        <div>
          <h1>{props.title}</h1>
          <p>{props.text}</p>
        </div>
        <footer>
          <button type="button">{props.btnText}</button>
        </footer>
      </div>
    </div>
  );
};

export default Screen;
