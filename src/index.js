import React from "react";
import ReactDOM from "react-dom";
// Redux and Middleware
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
// Components
import "./index.css";
import App from "./App";
import reducer from "./reducers/index";

const { worker } = require("./mocks/browser");
worker.start();

const store = createStore(reducer, applyMiddleware(logger, thunk));

const rootElement = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
