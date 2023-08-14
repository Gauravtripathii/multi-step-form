import {useState, useEffect} from "react";

import "./main.css";
import Nav from "../components/Nav";

import {Routes, Route} from "react-router-dom";

import Info from "../components/Info";
import Plans from "../components/Plans";
import AddOns from "../components/AddOns";

function App() {
  const [basicInfo, setBasicInfo] = useState({name: "", email: "", number: ""});
  const [plan, setPlan] = useState({planType: "", charge: ""});

  useEffect(()=>{
    console.log(basicInfo);
  }, [basicInfo]);

  return (
    <div className="app">
      <Nav />
      <div className="form-container">
        <Routes>
          <Route path="/" element={<Info callback={setBasicInfo} />} />
          <Route path="/plans" element={<Plans />} />
          <Route path="/add-ons" element={<AddOns />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
