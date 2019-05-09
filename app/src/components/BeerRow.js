/* eslint-disable */
/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable linebreak-style */
import React from "react";
import { useEffect } from "react";
// Redux
import { connect } from "react-redux";
import { getBeers } from "../actions/beers";
import store from "../store";

const BeerRow = ({ getBeers, beers }) => {

  useEffect(() => {
    getBeers('all');
  }, []);
  return (
    <div>
      
      {beers.map(beer => {
        return (
          <div>
            <h2>{beer.name}</h2>
            <p>{beer.tagline}</p>
            <img src={beer.image_url} alt="beer-pic" style={{ width: "100px" }} />
          </div>
        );
      })}
     
    </div>
  );
};

const mapStateToProps = state => ({
  beers: state.beers.allBeers
});

export default connect(mapStateToProps, { getBeers })(BeerRow);
