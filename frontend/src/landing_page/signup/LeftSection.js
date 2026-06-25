import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function LeftSection() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // ✅ Frontend validation
    if (!formData.username.trim()) {
      return setError("Username is required");
    }
    if (!formData.email.trim()) {
      return setError("Email is required");
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return setError("Please enter a valid email address");
    }
    if (!formData.password) {
      return setError("Password is required");
    }
    if (formData.password.length < 6) {
      return setError("Password must be at least 6 characters");
    }

    setLoading(true);

    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/signup`,
        {
          username: formData.username,
          email: formData.email,
          password: formData.password,
        },
        { withCredentials: true }
      );

      if (data.success) {
      window.location.href = process.env.REACT_APP_DASHBOARD_URL;
      } else {
        setError(data.message);
      }
    } catch (err) {
      if (err.response) {
        setError(err.response.data.message || "Signup failed");
      } else if (err.request) {
        setError("Cannot connect to server. Please try again later.");
      } else {
        setError("Something went wrong. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-3">
      <div className="row">
        {/* Left Side Image */}
        <div className="col-6 text-center">
          <img
            src="./assets/signup1.svg"
            alt="Signup"
            className="img-fluid w-75"
          />
        </div>

        {/* Right Side Form */}
        <div className="col-6 border-bottom">
          <div className="w-75 mx-auto">
            <h1 className="mb-3 fs-3">Signup now</h1>
            <p className="mb-4 fs-5 text-muted">
              Or track your existing application
            </p>

            {/* ✅ Error message */}
            {error && (
              <div className="alert alert-danger" role="alert">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="username"
                className="form-control form-control-lg mb-3"
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                className="form-control form-control-lg mb-3"
                placeholder="Email address"
                value={formData.email}
                onChange={handleChange}
              />
              <input
                type="password"
                name="password"
                className="form-control form-control-lg mb-3"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
              />

              <button
                type="submit"
                className="btn btn-primary fs-5 mt-3 mb-3"
                style={{
                  width: "40%",
                  backgroundColor: "rgb(56, 126, 209)",
                }}
                disabled={loading}
              >
                {loading ? "Signing up..." : "Sign up"}
              </button>
            </form>

            <p className="fs-6 mb-3 text-muted">
              By proceeding, you agree to the Zerodha{" "}
              <a href="#" style={{ textDecoration: "none" }}>
                terms
              </a>{" "}
              &{" "}
              <a href="#" style={{ textDecoration: "none" }}>
                privacy policy
              </a>
            </p>
            <p className="fs-6 text-center mt-3">
              Already have an account?{" "}
              <a href="/login" className="text-decoration-none fw-semibold">
                Login
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;