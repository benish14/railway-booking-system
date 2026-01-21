import Steps from "../components/Steps";

export default function SelectRoute({ setStep }) {
  return (
    <section className="booking">
      <Steps active={1} />

      <div className="card">
        <h2>📍 Route Selection</h2>

        <div className="form-grid">
          <input placeholder="From Station" />
          <input placeholder="To Station" />
          <input type="date" />
          <select>
            <option>Economy</option>
            <option>Business</option>
          </select>
        </div>

        <button className="primary-btn right" onClick={() => setStep(2)}>
          Continue →
        </button>
      </div>
    </section>
  );
}
