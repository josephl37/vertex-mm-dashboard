import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import makerReducer from "./makerReducer";
import restrictReducer from "./restrictedUser";
import loadingReducer from "./loadingReducer";

const rootReducer = combineReducers({
  data: makerReducer,
  restrict: restrictReducer,
  loading: loadingReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
