import { FETCH_DATA } from "../actions";

const DEFAULT_STATE = {};

const makerReducer = function (state = DEFAULT_STATE, action) {
  switch (action.type) {
    case FETCH_DATA:
      return action.payload
    default:
      return state;
  }
};

export default makerReducer;
