import React from "react";
import "./main.css";

function AddOns() {
  return (
    <div className="add-ons inner-content">
      <div>
        <h1>Pick add-ons</h1>
        <p>Add-ons help enhance your gaming experience.</p>
      </div>

      <div className="select-container">
        <div className="select">
          <input type="checkbox" />
          <div className="checkbox-details">
            <span>Online Services</span>
            <p>Access to multiplayer games</p>
          </div>
          <div className="pricing">+$1/mo</div>
        </div>

        <div className="select">
          <input type="checkbox" />
          <div className="checkbox-details">
            <span>Online Services</span>
            <p>Access to multiplayer games</p>
          </div>
          <div className="pricing">+$1/mo</div>
        </div>

        <div className="select">
          <input type="checkbox" />
          <div className="checkbox-details">
            <span>Online Services</span>
            <p>Access to multiplayer games</p>
          </div>
          <div className="pricing">+$1/mo</div>
        </div>
      </div>

      <footer>
        <div className="go-back">
          <button>Go Back</button>
        </div>
        <div className="button">
          <button>Next Step</button>
        </div>
      </footer>
    </div>
  );
}

export default AddOns;
