import React from "react";
import "./main.css";

function Info() {
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
            <input type="text" placeholder="e.g. Yuval Harari" required />
          </div>
          <div>
            <label htmlFor="name">Email Address</label>
            <input type="text" placeholder="e.g. yuvalharari@noah.com" required />
          </div>
          <div>
            <label htmlFor="name">Phone Number</label>
            <input type="text" placeholder="e.g. +91 9220520220" required />
          </div>
        </div>

        <div className="button">
          <button>Next Step</button>
        </div>
      </form>
    </div>
  );
}

export default Info;
