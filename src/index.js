import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import "tachyons";
import App from "../src/containers/App";
import { Provider } from "react-redux";
import { searchRobots } from "./reducers";
import { createStore } from "redux";
import "./index.css";

const store = createStore(searchRobots);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>
);

reportWebVitals();
