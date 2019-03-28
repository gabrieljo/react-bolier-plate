import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";

import * as modules from "./modules";

const reducers = combineReducers(modules);
const middlewares = [thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configure = () =>
  createStore(reducers, composeEnhancers(applyMiddleware(...middlewares)));

export default configure;
