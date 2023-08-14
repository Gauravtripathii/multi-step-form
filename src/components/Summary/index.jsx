import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./main.css";

function Summary({ plan, addOns }) {
  const [planPrice, setPlanPrice] = useState(0);
  const [osCharge, setOsCharge] = useState(0);
  const [lsCharge, setLsCharge] = useState(0);
  const [cpCharge, setCpCharge] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (plan.planType === "arcade") {
      if (plan.charge === "yearly") setPlanPrice(90);
      else setPlanPrice(9);
    } else if (plan.planType === "advanced") {
      if (plan.charge === "yearly") setPlanPrice(120);
      else setPlanPrice(12);
    } else {
      if (plan.charge === "yearly") setPlanPrice(150);
      else setPlanPrice(15);
    }

    if (addOns.onlineService) {
      if (plan.charge === "yearly") setOsCharge(10);
      else setOsCharge(1);
    }
    if (addOns.largeStorage) {
      if (plan.charge === "yearly") setLsCharge(20);
      else setLsCharge(2);
    }
    if(addOns.customProfile) {
      if (plan.charge === "yearly") setCpCharge(20);
      else setCpCharge(2);
    }
    setTotal(planPrice + osCharge + lsCharge + cpCharge);
  }, [plan, addOns, planPrice, osCharge, lsCharge, cpCharge]);
  return (
    <div className="summary inner-content">
      <div>
        <h1>Finishing up</h1>
        <p>Double-check everything looks OK before confirming.</p>
      </div>
      <div className="details">
        <div className="plan">
          <div>
            <span>
              {plan.planType} ({plan.charge})
            </span>
            <NavLink to="/plan">Change</NavLink>
          </div>
          <div>
            <span>
              ${planPrice}/{plan.charge === "yearly" ? "yr" : "mo"}
            </span>
          </div>
        </div>
        <div className="addons">
          {addOns.onlineService ? (
            <p>
              <span>Online Service</span>
              <span>
                +${osCharge}/{plan.charge === "yearly" ? "yr" : "mo"}
              </span>
            </p>
          ) : (
            ""
          )}

          {addOns.largeStorage ? (
            <p>
              <span>Large storage</span>
              <span>
                +${lsCharge}/{plan.charge === "yearly" ? "yr" : "mo"}
              </span>
            </p>
          ) : (
            ""
          )}

          {addOns.customProfile ? (
            <p>
              <span>Custom profile</span>
              <span>
                +${cpCharge}/{plan.charge === "yearly" ? "yr" : "mo"}
              </span>
            </p>
          ) : (
            ""
          )}
        </div>
        <div className="total">
            <span>Total(per {plan.charge === "yearly" ? "year" : "month"})</span>
            <h2>${total}/{plan.charge === "yearly" ? "yr" : "mo"}</h2>
        </div>
      </div>

      <footer>
        <div className="go-back">
          <button>Go Back</button>
        </div>
        <div className="button">
          <button>Confirm</button>
        </div>
      </footer>
    </div>
  );
}

export default Summary;
