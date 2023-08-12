import "./main.css";
import Nav from "../components/Nav";

import {Routes, Route} from "react-router-dom";

import Info from "../components/Info";

function App() {
  return (
    <div className="app">
      <Nav />
      <div className="form-container">
        <Routes>
          <Route path="/" element={<Info />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
