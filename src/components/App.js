import React, { useState, useEffect } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import LoginScreen from "../screens/LoginScreen";
import HomeScreen from "../screens/HomeScreen";
import { logout, setLoginStatus } from "../moduels/actions/authActions";
const App = props => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const auth = JSON.parse(localStorage.getItem("auth"));

    if (auth && auth.token) {
      props.setLoginStatus(true);
    } else {
      props.setLoginStatus(false);
    }
  }, [token]);

  return (
    <BrowserRouter>
      {props.isLoggedIn ? (
        <div className="app">{LoggedInRoutes()}</div>
      ) : (
        <div className="page-wrapper">{LoggedOutRoutes()}</div>
      )}
    </BrowserRouter>
  );
};

//before login
const LoggedOutRoutes = () => (
  <Switch>
    <Route path={"/"} exact={true} component={LoginScreen} />
  </Switch>
);

//after login
const LoggedInRoutes = () => (
  <Switch>
    <Route path={"/"} exact={true} component={HomeScreen} />
    <Redirect from={"*"} to={"/"} />
  </Switch>
);

export default connect(
  state => ({
    isLoggedIn: state.auth.get("isLoggedIn")
  }),
  { logout, setLoginStatus }
)(App);
