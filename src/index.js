import React from "react";
import ReactDOM from "react-dom";
import configure from "./moduels/store/configure";
import App from "./components/App";

import { Provider } from "react-redux";

const store = configure();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
