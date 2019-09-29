import React from "react";
import ReactDOM from "react-dom";
import App, { todoReducer } from "./App";
import { Provider } from "react-redux";
import { createStore } from "redux";
import uuid from "uuid";
const initialState = [
  { text: "Study some programming", isComplete: false, id: uuid() },
  { text: "Build programming website", isComplete: false, id: uuid() },
  { text: "Get office drinks", isComplete: true, id: uuid() }
];

export const store = createStore(todoReducer, initialState);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
