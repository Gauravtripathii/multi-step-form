import React from "react";
import "./main.css";

import image from "../../assets/images/icon-thank-you.svg";

function ThankYou() {
  return (
    <div className="thank-you inner-content">
      <div className="image">
        <img src={image} alt="thank you image" />
      </div>
      <h1>Thank You</h1>
    </div>
  );
}

export default ThankYou;
