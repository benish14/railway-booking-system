export default function Steps({ active }) {
  return (
    <div className="steps">
      <div className={`step ${active >= 1 ? "active" : ""}`}>
        ✔ <br /> SELECT ROUTE
      </div>
      <div className={`step ${active >= 2 ? "active" : ""}`}>
        2 <br /> PASSENGER DETAILS
      </div>
      <div className={`step ${active >= 3 ? "active" : ""}`}>
        3 <br /> REVIEW & PAY
      </div>
    </div>
  );
}
