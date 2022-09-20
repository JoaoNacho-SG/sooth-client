import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/globals.scss";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { UserProviderWrapper } from "./utils/user.context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <UserProviderWrapper>
        <App />
      </UserProviderWrapper>
    </Router>
  </React.StrictMode>
);
