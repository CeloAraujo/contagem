import { useState } from "react";
import "./App.css";

import { Outlet } from "react-router-dom";

import Loading from "./assets/newyear.jpg";

import { useContext } from "react";
import { CountDownContext } from "./context/CountDownContext";

function App() {
  const { event } = useContext(CountDownContext);

  let eventImage = null;

  if (event) eventImage = event.image;

  return (
    <>
      <div
        className="app"
        style={
          eventImage
            ? { backgroundImage: `url(${eventImage})` }
            : { backgroundImage: `url(${Loading})` }
        }
      >
        <div className="container">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default App;
