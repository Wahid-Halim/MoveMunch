import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import './index.css';
import App from "./App";



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating
      maxRating={5}
      messages={["Terrible", "bad", "okay", "good", "Amazing"]}
    />
    <StarRating maxRating={5} size={20} color="tomato" defaultRating={3} />
    <Test /> */}
  </React.StrictMode>
);
