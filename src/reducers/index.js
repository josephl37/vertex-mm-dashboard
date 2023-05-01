import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import makerReducer from "./makerReducer";
import restrictReducer from "./restrictedUser";

const rootReducer = combineReducers({
  data: makerReducer,
  restrict: restrictReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
