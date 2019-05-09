/* eslint-disable */
import { GET_BEERS, GET_RANDOM_BEER } from "../actions/types";

const initialState = {
  allBeers: []
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_RANDOM_BEER:
    case GET_BEERS:
      return {
        ...state,
        allBeers: payload
      };
    default:
      return state;
  }
}
