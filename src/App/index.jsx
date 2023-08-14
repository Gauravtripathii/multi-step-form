import { useState, useEffect } from "react";

import "./main.css";
import Nav from "../components/Nav";

import { Routes, Route } from "react-router-dom";

import Info from "../components/Info";
import Plans from "../components/Plans";
import AddOns from "../components/AddOns";

function App() {
  const [basicInfo, setBasicInfo] = useState({
    name: "",
    email: "",
    number: "",
  });
  const [plan, setPlan] = useState({ planType: "", charge: "" });
  const [addOns, setAddOns] = useState({
    onlineService: false,
    largeStorage: false,
    customProfile: false,
  });

  useEffect(() => {
    console.log(basicInfo);
  }, [basicInfo]);

  useEffect(() => {
    console.log(plan);
  }, [plan]);

  useEffect(() => {
    console.log(addOns);
  }, [addOns]);

  return (
    <div className="app">
      <Nav />
      <div className="form-container">
        <Routes>
          <Route path="/" element={<Info callback={setBasicInfo} />} />
          <Route path="/plans" element={<Plans callback={setPlan} />} />
          <Route path="/add-ons" element={<AddOns charge={plan.charge} callback={setAddOns} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
