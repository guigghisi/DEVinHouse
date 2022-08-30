import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import M1S09E1 from "./pages/M1S09E1";
import M1S09E2 from "./pages/M1S09E2";
import M1S09E3 from "./pages/M1S09E3";
import M1S09E4 from "./pages/M1S09E4";
import M1S09E5 from "./pages/M1S09E5";
import M1S09E6 from "./pages/M1S09E6";
import M1S09E7 from "./pages/M1S09E7";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App />  */}
    {/* <M1S09E1 /> */}
    {/* <M1S09E2 /> */}
    {/* <M1S09E3 /> */}
    {/* <M1S09E4 /> */}
    {/* <M1S09E5 /> */}
    {/* <M1S09E6 /> */}
    <M1S09E7 />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
