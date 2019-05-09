/* eslint-disable */
import { GET_RANDOM_BEER } from "./types";
import axios from "axios";

export const getRandomBeer = () => async dispatch => {
  console.log("i want more beer");
  console.log('hi')
  const response = await axios.get(
    "https://ironbeerapi.herokuapp.com/beers/random"
  );

  dispatch({
    type: GET_RANDOM_BEER,
    payload: response.data,
  });
};
