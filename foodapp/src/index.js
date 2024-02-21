import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, RouterProvider } from "react-router-dom";
import "./index.css";
import {App,router} from "./App"

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <Router>
        <App />
      </Router>
    </RouterProvider>
  </React.StrictMode>
);
