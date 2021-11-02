import { StrictMode } from "react";
import ReactDOM from "react-dom";
import "bootstrap-css";
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
