import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function LeftSection() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
const handleSubmit = async (e) => {
  e.preventDefault();
  setError("");
  try {
    const { data } = await axios.post(
      "https://zerodha-backend-38uf.onrender.com/login",
      { email: formData.email, password: formData.password },
      { withCredentials: true }
    );

    console.log("Backend response:", data);  // ← add this
    console.log("Dashboard URL:", process.env.REACT_APP_DASHBOARD_URL);  // ← add this

    if (data.success) {
      window.location.href = "https://zerodha-dashboard-ymjo.onrender.com";
    } else {
      setError(data.message);
    }
  } catch (err) {
    console.log("Error:", err);  // ← add this
    setError("Something went wrong. Please try again.");
  }
};
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-6 text-center">
          <img src="./assets/signup1.svg" alt="Login" className="img-fluid w-75" />
        </div>
        <div className="col-6 border-bottom">
          <div className="w-75 mx-auto">
            <h1 className="mb-3 fs-3">Login</h1>
            <p className="mb-4 fs-5 text-muted">Or track your existing application</p>
            {error && <div className="alert alert-danger">{error}</div>}
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                name="email"
                className="form-control form-control-lg mb-3"
                placeholder="Email address"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="password"
                name="password"
                className="form-control form-control-lg mb-3"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <button
                type="submit"
                className="btn btn-primary fs-5 mt-3 mb-3"
                style={{ width: "40%", backgroundColor: "rgb(56, 126, 209)" }}
              >
                Login
              </button>
            </form>
            <p className="fs-6 text-center mt-3">
              Don't have an account?{" "}
              <a href="/signup" className="text-decoration-none fw-semibold">Sign up</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;