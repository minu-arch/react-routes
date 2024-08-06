import React, { useState } from 'react';
import './FlightBook.css';

function FlightBook() {
  const [flightType, setFlightType] = useState('');
  console.log(flightType);

  const handleChange = (event) => {
    setFlightType(event.target.value);
  };

  return (
    <div className="container-flight">
      <div className="flightbook">
        <label htmlFor="bookflight-select">Choose a Flight: </label>
        <select
          id="bookflight-select"
          value={flightType}
          onChange={handleChange}
        >
          <option value="">--Please choose an option--</option>
          <option value="one-way-flight">one-way flight </option>
          <option value="return-flight">return flight</option>
        </select>
        <input type="text" value={flightType} />
        <input type="text" />
        <button className="buttonbook">Book Flight</button>
      </div>
      {/* {selectedOption && <p>You selected: {selectedOption}</p>} */}
    </div>
  );
}

export default FlightBook;
