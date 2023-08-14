import "./main.css";
import Nav from "../components/Nav";

import {Routes, Route} from "react-router-dom";

import Info from "../components/Info";
import Plans from "../components/Plans";
import AddOns from "../components/AddOns";

function App() {
  return (
    <div className="app">
      <Nav />
      <div className="form-container">
        <Routes>
          <Route path="/" element={<Info />} />
          <Route path="/plans" element={<Plans />} />
          <Route path="/add-ons" element={<AddOns />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
