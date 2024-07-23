import React from "react";

type DataPersonProps = {
  data: {
    name: string;
    age: number;
    country: string;
    job: string;
  };
};

const DataPerson = (props: DataPersonProps) => {
  const { data } = props;
  return (
    <div>
      <div className="data-container">
        <h2>{data.name}</h2>
        <p>Age: {data.age}</p>
        <p>Country: {data.country}</p>
        <p>Job: {data.job}</p>
      </div>
    </div>
  );
};

export default DataPerson;
