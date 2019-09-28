import React from "react";
import ReactDOM from "react-dom";
import App, { todoReducer } from "./App";
import { Provider } from "react-redux";
import { createStore } from "redux";

const initialState = [
  { text: "Study some programming", isComplete: false, id: 0 },
  { text: "Build programming website", isComplete: false, id: 1 },
  { text: "Get office drinks", isComplete: true, id: 2 }
];

export const store = createStore(todoReducer, initialState);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
