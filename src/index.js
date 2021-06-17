import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { WatchContextProvider } from "./context/watch-context";
import { UIContextProvider } from "./context/ui-context";
import { StopperContextProvider } from "./context/stopper-context";

ReactDOM.render(
  <React.StrictMode>
    <UIContextProvider>
      <WatchContextProvider>
        <StopperContextProvider>
          <App />
        </StopperContextProvider>
      </WatchContextProvider>
    </UIContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
