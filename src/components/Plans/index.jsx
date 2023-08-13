import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
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
  const [costs, setCosts] = useState({
    arcade: "$9/mo",
    advanced: "$12/mo",
    pro: "$15/mo",
  });
  const navigate = useNavigate();
  const [plan, setPlan] = useState();
  const [sub, setSub] = useState("monthly");
  const arcade = useRef();
  const advanced = useRef();
  const pro = useRef();

  useEffect(() => {
    if (toggle % 2 !== 0) {
      toggleYearlyText.current.style.color = "var(--Marine-blue)";
      toggleMonthlyText.current.style.color = "var(--Cool-gray)";
      toggleCircle.current.style.transform = "translate(103%)";
      setCosts({
        arcade: "$90/yr",
        advanced: "$120/yr",
        pro: "$150/yr",
      });
      setSub("yearly");
    } else {
      toggleMonthlyText.current.style.color = "var(--Marine-blue)";
      toggleYearlyText.current.style.color = "var(--Cool-gray)";
      toggleCircle.current.style.transform = "translate(0)";
      setCosts({
        arcade: "$9/mo",
        advanced: "$12/mo",
        pro: "$15/mo",
      });
      setSub("monthly");
    }

    // for plans
    if (plan === "arcade") {
      arcade.current.style.borderColor = "var(--Purplish-blue)";
      advanced.current.style.borderColor = "var(--Cool-gray)";
      pro.current.style.borderColor = "var(--Cool-gray)";
    } else if (plan === "advanced") {
      advanced.current.style.borderColor = "var(--Purplish-blue)";
      arcade.current.style.borderColor = "var(--Cool-gray)";
      pro.current.style.borderColor = "var(--Cool-gray)";
    } else if (plan === "pro") {
      pro.current.style.borderColor = "var(--Purplish-blue)";
      arcade.current.style.borderColor = "var(--Cool-gray)";
      advanced.current.style.borderColor = "var(--Cool-gray)";
    }
  }, [toggle, plan]);

  const handleNext = () => {
    if (plan) navigate("/add-ons");
  };
  const handleBack = () => {
    navigate("/");
  };

  return (
    <div className="plans-page inner-content">
      <div>
        <h1>Select your plan</h1>
        <p>You have the option of monthly or yearly billing.</p>
      </div>

      <div className="card-container">
        <div className="card" onClick={() => setPlan("arcade")} ref={arcade}>
          <div className="icon">
            <img src={arcade_icon} alt="arcade icon" />
          </div>
          <div className="details">
            <span className="title">Arcade</span>
            <span className="cost">{costs.arcade}</span>
            <footer>{sub === "yearly" ? "2 months free" : ""}</footer>
          </div>
        </div>
        <div
          className="card"
          onClick={() => setPlan("advanced")}
          ref={advanced}
        >
          <div className="icon">
            <img src={advanced_icon} alt="advanced icon" />
          </div>
          <div className="details">
            <span className="title">Advanced</span>
            <span className="cost">{costs.advanced}</span>
            <footer>{sub === "yearly" ? "2 months free" : ""}</footer>
          </div>
        </div>
        <div className="card" onClick={() => setPlan("pro")} ref={pro}>
          <div className="icon">
            <img src={pro_icon} alt="pro icon" />
          </div>
          <div className="details">
            <span className="title">Pro</span>
            <span className="cost">{costs.pro}</span>
            <footer>{sub === "yearly" ? "2 months free" : ""}</footer>
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

export default Plans;
