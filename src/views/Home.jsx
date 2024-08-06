import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

const Home = () => (
  <div className="wrapper">
    <h1>PlayGround</h1>
    <div className="vertical">
      <Link to="/about">About</Link>
      <Link to="/buttons">Buttons</Link>
      <Link to="/cards">Cards</Link>
      <Link to="/react">ReactTesting</Link>
      <Link to="/sample">Sample</Link>
    </div>
  </div>
);

export default Home;
