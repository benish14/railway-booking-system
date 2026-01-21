import Steps from "../components/Steps";

export default function PassengerDetails({ setStep }) {
  return (
    <section className="booking">
      <Steps active={2} />

      <div className="card">
        <h2>👤 Passenger Details</h2>

        <div className="form-grid">
          <input placeholder="Full Name" />
          <input placeholder="Age" />
          <input placeholder="Email" />
          <input placeholder="Phone" />
          <select style={{ gridColumn: "1 / -1" }}>
            <option>No Preference</option>
            <option>Window</option>
            <option>Aisle</option>
          </select>
        </div>

        <div className="btn-row">
          <button className="secondary-btn" onClick={() => setStep(1)}>
            Back
          </button>
          <button className="primary-btn" onClick={() => setStep(3)}>
            Continue →
          </button>
        </div>
      </div>
    </section>
  );
}
