import { SET_LOADING } from "../actions";

const DEFAULT_STATE = null;

const loadingReducer = function (state = DEFAULT_STATE, action){
  switch (action.type) {
    case SET_LOADING:
      return action.payload;
    default:
      return state;
  }
}

export default loadingReducer;
