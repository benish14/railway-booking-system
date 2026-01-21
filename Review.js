import React from "react";
import "./Review.css";


export default function Review({ setStep }) {
  const booking = {
    route: "Tirunelveli → Coimbatore",
    date: "jan 22, 2026",
    passenger: "Benish (Adult)",
    total: 170.0,
  };

  const handlePayment = () => {
    alert("Payment Successful!");
    // later you can integrate Stripe / Razorpay here
  };

  return (
    <div className="review-container">
      <h2 className="review-title">Review Booking</h2>

      <div className="review-card">
        <div className="review-row">
          <span>Route</span>
          <strong>{booking.route}</strong>
        </div>

        <div className="review-row">
          <span>Date</span>
          <strong>{booking.date}</strong>
        </div>

        <div className="review-row">
          <span>Passenger</span>
          <strong>{booking.passenger}</strong>
        </div>

        <div className="review-total">
          <span>Total</span>
          <strong>${booking.total.toFixed(2)}</strong>
        </div>
      </div>

      <div className="review-actions">
        <button className="back-btn" onClick={() => setStep(1)} >
          Back
        </button>

        <button className="pay-btn" onClick={handlePayment}>
          Confirm & Pay
        </button>
      </div>
    </div>
  );
}
