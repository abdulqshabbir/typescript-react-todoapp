import React from "react";
import ReactDOM from "react-dom";
import { todoReducer } from "./reducers";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import uuid from "uuid";
import App from "./App";

const initialState = [
  { text: "Study some programming", isComplete: false, id: uuid() },
  { text: "Mark some math tests", isComplete: false, id: uuid() },
  { text: "Make a mango drink", isComplete: false, id: uuid() }
];

export const store = createStore(
  todoReducer,
  initialState,
  applyMiddleware(logger)
);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
