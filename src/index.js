import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import "./index.css";
import globalSate from "./redux/store";

ReactDOM.render(
  <Provider store={globalSate}>
    <App />
  </Provider>,
  document.getElementById("root")
);
