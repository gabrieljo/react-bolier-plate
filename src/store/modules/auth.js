import { createAction, handleActions } from "redux-actions";

import { Map } from "immutable";

const initialState = Map({
  isLoggedIn: false
});

export default handleActions({}, initialState);
