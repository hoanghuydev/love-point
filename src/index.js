import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "~/App";
import reportWebVitals from "./reportWebVitals";
import GlobalStyles from "./components/GlobalStyles";
import { BrowserRouter as Router } from "react-router-dom";

import * as mdb from "mdb-ui-kit"; // lib
import { Input } from "mdb-ui-kit"; // module
import Provider from "./store/Provider";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyles>
      <Provider>
        <Router basename="/love-point">
          <App />
        </Router>
      </Provider>
    </GlobalStyles>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
