// dashboard/src/index.js
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./index.css";
import Home from "./components/Home";

// Check for the JWT cookie set by backend
const isAuthenticated = () =>
  document.cookie.split(';').some(c => c.trim().startsWith('token='));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* ✅ Protected: redirect to frontend login if no token */}
        <Route
          path="/*"
          element={
            isAuthenticated()
              ? <Home />
              : <Navigate to="http://localhost:3000/login" replace />
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);