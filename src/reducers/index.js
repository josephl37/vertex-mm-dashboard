import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import makerReducer from "./makerReducer";

const rootReducer = combineReducers({
  data: makerReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
