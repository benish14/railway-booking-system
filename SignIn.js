import React, { useState } from "react";
import "./SignIn.css";

export default function SignIn({ setPage }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Signed in successfully");
    setPage("home");
  };

  return (
    <div className="signin-wrapper">
      <div className="signin-card">
        <div className="signin-icon">🚆</div>

        <h2>Railway Booking System</h2>
        <p>Sign in to manage your journeys</p>

        <form onSubmit={handleSubmit}>
          <label>Email address</label>
          <input
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <div className="forgot">Forgot password?</div>

          <button type="submit" className="signin-main-btn">
            Sign In
          </button>
        </form>

        <div className="signup-text">
          Don’t have an account? <span>Create one now</span>
        </div>
      </div>
    </div>
  );
}
