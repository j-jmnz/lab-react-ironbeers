/* eslint-disable */
import { GET_BEERS, GET_RANDOM_BEER } from "./types";
import axios from "axios";

export const getBeers = (type) => async dispatch => {
 
    const response = await axios.get(
    `https://ironbeerapi.herokuapp.com/beers/${type}`
  );

  dispatch({
    type: GET_BEERS,
    payload: response.data
  });
}

  

