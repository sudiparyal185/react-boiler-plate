import React from "react";
import "./App.css";
import Logo from "./assets/Logo.png";
const App = () => {
  return (
    <div className="container__app">
      <img src={Logo} alt="logo" style={{ width: "50px", height: "50px" }} />
    </div>
  );
};

export default App;
