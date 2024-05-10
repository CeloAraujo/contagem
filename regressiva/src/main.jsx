import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

//pages
import Home from "./routes/Home.jsx";
import CountDown from "./routes/CountDown.jsx";

// provider
import { CountdownProvider } from "./context/CountDownContext.jsx";

const router = createBrowserRouter([
  {
    path: "/contagem/",
    element: <App />,
    children: [
      {
        path: "/contagem/",
        element: <Home />,
      },
      {
        path: "/contagem/countdown",
        element: <CountDown />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
   <CountdownProvider>
   <RouterProvider router={router} />
   </CountdownProvider>
  </React.StrictMode>
);
