import React from "react";
import "./about.css";
import DataPerson from "./DataPerson";

const About = () => {
  const data = {
    name: "John Doe",
    age: 25,
    country: "USA",
    job: "Developer",
  };

  return (
    <div className="about-container">
      <div className="title-container">
        <h1>About</h1>
        <p>This is the about page.</p>

        <DataPerson data={data} />
      </div>
    </div>
  );
};

export default About;
