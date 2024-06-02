import React from "react";

import "./style.css";

function Header(props) {
  return (
    <header className="header-container">
      <h1 className="header-text">Alejandro Capilla</h1>
      <div className="image-container">
        <img
          src="./images/venturaSunset.jpeg"
          alt="Header Image of a lake"
        />
      </div>
      {props.children}
    </header>
  );
}

export default Header;
