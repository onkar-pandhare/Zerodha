// frontend/src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './index.css';
import HomePage from './landing_page/home/HomePage';
import SignupPage from './landing_page/signup/SignupPage';
import AboutPage from './landing_page/about/AboutPage';
import SupportPage from './landing_page/support/SupportPage';
import PricingPage from './landing_page/pricing/PricingPage';
import ProductPage from './landing_page/products/ProductPage';
import LoginPage from './landing_page/Login/LoginPage';
import NotFound from './landing_page/NotFound';
import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';

// Helper: check if token cookie exists
const isAuthenticated = () => {
  return document.cookie.split(';').some(c => c.trim().startsWith('token='));
};

// Protected Route wrapper
const ProtectedRoute = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/login" replace />;
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      {/* Dashboard — no Navbar/Footer, fully protected */}
      <Route
        path="/dashboard/*"
        element={
          <ProtectedRoute>
            {/* Replace with your Dashboard's Home component if unified */}
            {/* For now redirect to dashboard app */}
            <Navigate to="http://localhost:3001" />
          </ProtectedRoute>
        }
      />

      {/* Public pages with Navbar + Footer */}
      <Route path="/*" element={
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/product" element={<ProductPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/support" element={<SupportPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </>
      } />
    </Routes>
  </BrowserRouter>
);