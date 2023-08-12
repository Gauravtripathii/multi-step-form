import React, { useState, useEffect, useRef } from "react";
import "./main.css";

// icons
import arcade_icon from "../../assets/images/icon-arcade.svg";
import advanced_icon from "../../assets/images/icon-advanced.svg";
import pro_icon from "../../assets/images/icon-pro.svg";

function Plans() {
  const [toggle, setToggle] = useState(0);
  const toggleMonthlyText = useRef();
  const toggleYearlyText = useRef();
  const toggleCircle = useRef();

  useEffect(() => {
    if (toggle % 2 !== 0) {
      toggleYearlyText.current.style.color = "var(--Marine-blue)";
      toggleMonthlyText.current.style.color = "var(--Cool-gray)";
      toggleCircle.current.style.transform = "translate(103%)";
    } else {
      toggleMonthlyText.current.style.color = "var(--Marine-blue)";
      toggleYearlyText.current.style.color = "var(--Cool-gray)";
      toggleCircle.current.style.transform = "translate(0)";
    }
  }, [toggle]);

  return (
    <div className="plans-page inner-content">
      <div>
        <h1>Select your plan</h1>
        <p>You have the option of monthly or yearly billing.</p>
      </div>

      <div className="card-container">
        <div className="card">
          <div className="icon">
            <img src={arcade_icon} alt="arcade icon" />
          </div>
          <div className="details">
            <span className="title">Arcade</span>
            <span className="cost"></span>
            <footer></footer>
          </div>
        </div>
        <div className="card">
          <div className="icon">
            <img src={advanced_icon} alt="advanced icon" />
          </div>
          <div className="details">
            <span className="title">Advanced</span>
            <span className="cost"></span>
            <footer></footer>
          </div>
        </div>
        <div className="card">
          <div className="icon">
            <img src={pro_icon} alt="pro icon" />
          </div>
          <div className="details">
            <span className="title">Pro</span>
            <span className="cost"></span>
            <footer></footer>
          </div>
        </div>
      </div>

      <div className="plan-type">
        <div className="text" ref={toggleMonthlyText}>
          Monthly
        </div>
        <div className="toggle-btn" onClick={() => setToggle(toggle + 1)}>
          <span className="circle" ref={toggleCircle}></span>
        </div>
        <div className="text" ref={toggleYearlyText}>
          Yearly
        </div>
      </div>
    </div>
  );
}

export default Plans;
