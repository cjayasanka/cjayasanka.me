import React from "react";

const Nav = () => {
  return (
    <nav className="ui container">
      <h1 className="ui inverted header">Chathura Jayasanka</h1>
      <div className="ui borderless inverted compact menu">
        <a className="active item disabled">Home</a>
        <a className="item">Projets</a>
        <a className="item">Resume</a>
        <a className="item">Contact</a>
      </div>
    </nav>
  );
};

export default Nav;
