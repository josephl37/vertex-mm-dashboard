import { RESTRICT_USER } from "../actions";

const DEFAULT_STATE = null;

const restrictReducer = function (state = DEFAULT_STATE, action){
  switch (action.type) {
    case RESTRICT_USER:
      return true;
    default:
      return state;
  }
}

export default restrictReducer;