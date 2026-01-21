import React from "react";
import "./Navbar.css";

export default function Navbar({ page, setPage }) {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <span className="logo">🚆 BenzRailways</span>
      </div>

      <div className="navbar-center">
        <span
          className={page === "home" ? "active" : ""}
          onClick={() => setPage("home")}
        >
          Home
        </span>
        <span
          className={page === "booking" ? "active" : ""}
          onClick={() => setPage("booking")}
        >
          Booking
        </span>
        <span>Contact</span>
      </div>

      <div className="navbar-right">
        <button className="signin-old-btn" onClick={() => setPage("signin")}>
          Sign In
        </button>
      </div>
    </nav>
  );
}
