import React from "react";

import "./style.css";

function Header(props) {
  return (
    <header className="header-container">
      <h1 className="header-text">Alejandro Capilla</h1>
      <div className="image-container">
        <img
          src="https://images.unsplash.com/photo-1570051008600-b34baa49e751?q=80&w=2085&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Header Image of a lake"
        />
      </div>
      {props.children}
    </header>
  );
}

export default Header;
