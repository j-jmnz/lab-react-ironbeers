/* eslint-disable */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable linebreak-style */
import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { getBeers } from '../actions/beers'
import { useEffect } from "react";

const RandomBeer = ({ getBeers, randomBeer }) => {
  useEffect(() => {
    getBeers('random');
  }, []);

  return (
    <React.Fragment>
      <h2>
        <Header />
      </h2>
      <div>{randomBeer.name}</div>
      <img src={randomBeer.image_url} alt="" />
    </React.Fragment>
  );
};

const mapStateToProps = state => ({
  randomBeer: state.beers.allBeers
});

export default connect(
  mapStateToProps,
  { getBeers }
)(RandomBeer);
