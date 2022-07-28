import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyle from "~/components/GlobalStyles";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import SvgWithUse from "./assets/Logo";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle>
        <App />
        <SvgWithUse />
      </GlobalStyle>
    </Router>
  </React.StrictMode>
);
