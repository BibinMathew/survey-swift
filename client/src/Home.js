import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Welcome to QuickSurvey</h1>
      <Link to="/create-survey">Create a Survey</Link>
    </div>
  );
};

export default Home;
