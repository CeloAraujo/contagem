import { useState } from "react";
import "./App.css";

import { Outlet } from "react-router-dom";

import Loading from "./assets/newyear.jpg";



function App() {
  

  return (
    <>
      <div className="app" style={{ backgroundImage: `url(${Loading})` }}>
        <div className="container">
          <Outlet/>
        </div>
      </div>
    </>
  );
}

export default App;
