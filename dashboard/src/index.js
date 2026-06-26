// dashboard/src/index.js
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./components/Home";

const isAuthenticated = () =>
  document.cookie.split(';').some(c => c.trim().startsWith('token='));

// ✅ Use useEffect for external redirect
const ProtectedHome = () => {
  React.useEffect(() => {
    if (!isAuthenticated()) {
       window.location.href = "https://zerodha-frontend-7emh.onrender.com/login";
    }
  }, []);

  return isAuthenticated() ? <Home /> : null;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<ProtectedHome />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);