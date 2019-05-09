/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable linebreak-style */
import { Link } from 'react-router-dom';
import React from 'react';


const Home = () => (
  <div>
    <h1>Iron Beers</h1>
    <h2>
      <Link to="/beers">Beers</Link>
    </h2>
    <h2>
      <Link to="/random-beer">Random Beer</Link>
    </h2>
    <h2>
      <Link to="/new-beer">New Beer</Link>
    </h2>
  </div>
);

export default Home;
