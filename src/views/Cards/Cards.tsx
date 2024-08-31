import React from 'react';
import './cards.css';
import CardOne from './CardOne';
import CardTwo from './CardTwo';
import CardPrivacy from './CardPrivacy';
import FlightBook from './FlightBook';
import DeleteConfirmation from './DeleteConfirmation';
import TaskToDo from './TaskToDo';

function Cards() {
  const data = {
    title: 'Cards',
  };

  return (
    <div className="container-cards">
      <div className="container-cards-wrapper">
        <h1>{data.title}</h1>
        <div className="container-vertical">
          <CardOne />
          <CardTwo />
          <CardPrivacy />
          <DeleteConfirmation />
          <FlightBook />
          <TaskToDo />
        </div>
      </div>
    </div>
  );
}

export default Cards;
