import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import SelectRoute from "./pages/SelectRoute";
import PassengerDetails from "./pages/PassengerDetails";
import Review from "./pages/Review";
import SignIn from "./pages/SignIn";

export default function App() {
  const [page, setPage] = useState("home");
  const [step, setStep] = useState(1);

  return (
    <>
      <Navbar page={page} setPage={setPage} setStep={setStep} />
      {page === "signin" && <SignIn setPage={setPage} />}

      {page === "home" && <Home setPage={setPage} />}
      {page === "booking" && (
        <>
          {step === 1 && <SelectRoute setStep={setStep} />}
          {step === 2 && <PassengerDetails setStep={setStep} />}
          {step === 3 && <Review />}
        </>
      )}
    </>
  );
}

