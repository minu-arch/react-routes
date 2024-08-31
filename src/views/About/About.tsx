import React from 'react';
import './about.css';
import DataPerson from './DataPerson';

type PageDataProps = {
  title: string;
  description: string;
};

export const PageData: React.FC<PageDataProps> = ({ title, description }) => (
  <>
    <h1>{title}</h1>
    <p>{description}</p>
  </>
);

const About = () => {
  const data = {
    name: 'John Doe',
    age: 25,
    country: 'USA',
    job: 'Developer',
  };

  const pageInfo = {
    title: 'About',
    description: 'This is the about page.',
  };

  return (
    <div className="about-container">
      <div className="title-container">
        <PageData title={pageInfo.title} description={pageInfo.description} />

        <DataPerson data={data} />
      </div>
    </div>
  );
};

export default About;
