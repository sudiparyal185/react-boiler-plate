import React from "react";
import "./App.css";
import Logo from "./assets/Logo.png";
const App = () => {
  return (
    <div className="container__app">
      React App without Script!!
      <img src={Logo} alt="logo" style={{ width: "500px", height: "500px" }} />
    </div>
  );
};

export default App;
