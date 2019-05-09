/* eslint-disable */
import { GET_BEERS, GET_RANDOM_BEER } from "../actions/types";

const initialState = {
  allBeers: []
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  console.log('branch test');
  console.log('2nd test')

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
