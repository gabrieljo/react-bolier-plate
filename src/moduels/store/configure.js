import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";

import { reducer as formReducer } from "redux-form";
import * as reducers from "../reducers";

//redux-form 연결을 위해서 기본 세팅된 값을 재조립하여 form object 추가
const rootReducer = {
  ...reducers,
  form: formReducer
};

const allReducers = combineReducers(rootReducer);
const middlewares = [thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configure = () => {
  return {
    ...createStore(
      allReducers,
      composeEnhancers(applyMiddleware(...middlewares))
    )
  };
};

export default configure;
