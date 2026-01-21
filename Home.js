export default function Home({ setPage }) {
  return (
    <section className="home">
      <span className="badge">● Now serving 50+ new destinations</span>
      <h1>Book Your Journey</h1>
      <p>Fast, comfortable, and eco-friendly travel.</p>

      <button className="primary-btn" onClick={() => setPage("booking")}>
        Book Now
      </button>
    </section>
  );
}
