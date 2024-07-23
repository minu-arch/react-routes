import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

export default () => (
  <div className="wrapper">
    <h1>PlayGround</h1>
    <div className="vertical">
      <Link to="/about">About</Link>
      <Link to="/buttons">Buttons</Link>
      <Link to="/cardspace1">cardspace1</Link>
      <Link to="/cardspace2">cardspace2</Link>
      <Link to="/cardspace3">cardspace3</Link>
    </div>
  </div>
);
