import React, { useState } from "react";
import { useNavigate } from "react-router";
import "./main.css";

function AddOns({ charge, callback }) {
  const [onlineService, setOnlineService] = useState(false);
  const [largeStorage, setLargeStorage] = useState(false);
  const [customProfile, setCustomProfile] = useState(false);

  const navigate = useNavigate();

  const handleNext = () => {
    callback({
      onlineService: onlineService,
      largeStorage: largeStorage,
      customProfile: customProfile,
    });
    navigate("/summary");
  };

  const handleBack = () => {
    navigate("/plans");
  };
  return (
    <div className="add-ons inner-content">
      <div>
        <h1>Pick add-ons</h1>
        <p>Add-ons help enhance your gaming experience.</p>
      </div>

      <div className="select-container">
        <div className="select">
          <input
            type="checkbox"
            onClick={(e) => setOnlineService(e.target.checked)}
          />
          <div className="checkbox-details">
            <span>Online Services</span>
            <p>Access to multiplayer games</p>
          </div>
          <div className="pricing">
            {charge === "yearly" ? "+$10/yr" : "+$1/mo"}
          </div>
        </div>

        <div className="select">
          <input
            type="checkbox"
            onClick={(e) => setLargeStorage(e.target.checked)}
          />
          <div className="checkbox-details">
            <span>Large Storage</span>
            <p>Extra 1TB of cloud save</p>
          </div>
          <div className="pricing">
            {charge === "yearly" ? "+$20/yr" : "+$2/mo"}
          </div>
        </div>

        <div className="select">
          <input
            type="checkbox"
            onClick={(e) => setCustomProfile(e.target.checked)}
          />
          <div className="checkbox-details">
            <span>Customizable profile</span>
            <p>Custom theme on your profile </p>
          </div>
          <div className="pricing">
            {charge === "yearly" ? "+$20/yr" : "+$2/mo"}
          </div>
        </div>
      </div>

      <footer>
        <div className="go-back">
          <button onClick={handleBack}>Go Back</button>
        </div>
        <div className="button">
          <button onClick={handleNext}>Next Step</button>
        </div>
      </footer>
    </div>
  );
}

export default AddOns;
