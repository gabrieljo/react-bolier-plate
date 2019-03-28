import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import LoginScreen from "../screens/LoginScreen";
import HomeScreen from "../screens/HomeScreen";

const App = props => {
  return (
    <BrowserRouter>
      {props.isLoggedIn ? (
        <div>{LoggedInRoutes()}</div>
      ) : (
        <div>{LoggedOutRoutes()}</div>
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
  null
)(App);
