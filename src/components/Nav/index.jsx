import React from "react";
import "./main.css";

function Nav() {
  return (
    <div className="nav">
      <div className="nav-btn">
        <span>1</span>
        <div className="txt">
          <span className="step">Step 1</span>
          <span>YOUR INFO</span>
        </div>
      </div>
      <div className="nav-btn">
        <span>2</span>
        <div className="txt">
          <span className="step">Step 2</span>
          <span>SELECT PLAN</span>
        </div>
      </div>
      <div className="nav-btn">
        <span>3</span>
        <div className="txt">
          <span className="step">Step 3</span>
          <span>ADD-ONS</span>
        </div>
      </div>
      <div className="nav-btn">
        <span>4</span>
        <div className="txt">
          <span className="step">Step 4</span>
          <span>SUMMARY</span>
        </div>
      </div>
    </div>
  );
}

export default Nav;
