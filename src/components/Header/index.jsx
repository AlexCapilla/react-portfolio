import React from "react";
import venturaSunset from "../../assets/images/venturaSunset.jpeg"
import "./style.css";

function Header(props) {
  return (
    <header className="header-container">
      <h1 className="header-text">Alejandro Capilla</h1>
      <div className="image-container">
        <img
          src= {venturaSunset}
          alt="Header Image of a beach town"
        />
      </div>
      {props.children}
    </header>
  );
}

export default Header;
