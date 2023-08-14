import React, { useState } from "react";
import "./main.css";

import { useNavigate } from "react-router-dom";

function Info({callback}) {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [number, setNumber] = useState();
  const navigate = useNavigate();

  const handleClick = () => {
    callback({name, email, number});
    if (name && email && number) navigate("/plans");
  };

  return (
    <div className="info-page inner-content">
      <div>
        <h1>Personal info</h1>
        <p>Please provide your name, email address and phone number.</p>
      </div>
      <form>
        <div className="input-box-c">
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              placeholder="e.g. Yuval Harari"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="name">Email Address</label>
            <input
              type="text"
              placeholder="e.g. yuvalharari@noah.com"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="name">Phone Number</label>
            <input
              type="text"
              placeholder="e.g. +91 9220520220"
              onChange={(e) => setNumber(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="button">
          <button onClick={handleClick}>Next Step</button>
        </div>
      </form>
    </div>
  );
}

export default Info;
