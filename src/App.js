import React from "react";
import Navbar from "./components/navbar/Navbar";
import Exterior from "./components/exterior/Exterior";
import Interior from "./components/Interior/Interior";
import Engine from "./components/Engine/Engine";
import "./index.css";
import Aerodynamics from "./components/aerodynamics/aerodynamics";

function App() {
  return (
    <div>
      <Navbar />
      <Exterior />
      <Interior />
      <Engine />
      <Aerodynamics />
    </div>
  );
}

export default App;
