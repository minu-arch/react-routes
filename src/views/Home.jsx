import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

export default () => (
  <div className="wrapper">
    <h1>PlayGround</h1>
    <div className="vertical">
      <Link to="/about">About</Link>
      <Link to="/buttons">Buttons</Link>
      <Link to="/cards">Cards</Link>
      <Link to="/game">Game</Link>
      <Link to="/sample">Sample</Link>
    </div>
  </div>
);
