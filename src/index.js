import { MaterialUIControllerProvider } from "context";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "assets/styles/tailwind.css";
import Chefdepartement from "pages/Chefdepartement";
// Material Dashboard 2 React Context Provider



ReactDOM.render(
  <BrowserRouter>
    <MaterialUIControllerProvider>
      <App />
    </MaterialUIControllerProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
