import React from "react";
import ReactDOM from "react-dom/client";
// import { GlobalContext, GlobalContextProvider } from "./context/GlobalContext";
import 'bootstrap/dist/css/bootstrap.min.css';
import { App } from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <GlobalContextProvider> */}
    <App />
    {/* </GlobalContextProvider> */}
  </React.StrictMode>
);
