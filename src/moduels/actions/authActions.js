import history from "../../history";
import api from "../../api";

import { LOGIN_FAILED, LOGIN, LOGOUT, SET_LOGIN_STATE } from "../types";

export const logout = () => {
  return { type: LOGOUT };
};

export const setLoginStatus = status => {
  return { type: SET_LOGIN_STATE, payload: status };
};

export const login = credential => async (dispatch, getState) => {
  const END_POINT = "/auth/login";

  const { username, password } = credential;
  const response = await api.post(END_POINT, { username, password });

  if (response.data.success) {
    const data = {
      token: response.data.token,
      isLoggedIn: true
    };
    localStorage.setItem("auth", JSON.stringify(data));
    dispatch({ type: LOGIN, payload: response.data });
  } else {
    dispatch({ type: LOGIN_FAILED, payload: response.data });
  }
};
