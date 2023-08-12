import React from "react";
import "./main.css";

import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <div className="nav">
      <div className="nav-btn">
        <NavLink to="/">
          <span className="number">1</span>
          <div className="txt">
            <span className="step">Step 1</span>
            <span>YOUR INFO</span>
          </div>
        </NavLink>
      </div>
      <div className="nav-btn">
        <NavLink to="/plans">
          <span className="number">2</span>
          <div className="txt">
            <span className="step">Step 2</span>
            <span>SELECT PLAN</span>
          </div>
        </NavLink>
      </div>
      <div className="nav-btn">
        <NavLink to="/add-ons">
          <span className="number">3</span>
          <div className="txt">
            <span className="step">Step 3</span>
            <span>ADD-ONS</span>
          </div>
        </NavLink>
      </div>
      <div className="nav-btn">
        <NavLink to="/summary">
          <span className="number">4</span>
          <div className="txt">
            <span className="step">Step 4</span>
            <span>SUMMARY</span>
          </div>
        </NavLink>
      </div>
    </div>
  );
}

export default Nav;
