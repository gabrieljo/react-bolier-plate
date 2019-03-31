import { LOGIN, LOGIN_FAILED, LOGOUT, SET_LOGIN_STATE } from "../types";
import { Map } from "immutable";
import { handleActions } from "redux-actions";

const initialState = Map({
  isLoggedIn: false,
  user: null,
  error: false,
  message: null
});

export default handleActions(
  {
    [LOGIN]: (state, action) =>
      state
        .set("isLoggedIn", true)
        .set("token", action.payload.token)
        .set("error", false)
        .set("message", null),
    [LOGIN_FAILED]: (state, action) =>
      state.set("error", true).set("message", action.payload.error),
    [LOGOUT]: (state, action) =>
      state.set("token", null).set("isLoggedIn", false),
    [SET_LOGIN_STATE]: (state, action) => {
      console.log("action", action);
      return state.set("isLoggedIn", action.payload);
    }
  },
  initialState
);
