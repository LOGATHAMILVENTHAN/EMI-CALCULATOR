import React, { useState } from "react";
import './App.css';

function App() {
  const [principal, setPrincipal] = useState("");
  const [rate, setRate] = useState("");
  const [tenure, setTenure] = useState("");
  const [emi, setEmi] = useState(null);

  const calculateEmi = () => {
    // Convert rate percentage to decimal and calculate monthly rate
    const monthlyRate = (parseFloat(rate) / 100) / 12;
    const months = parseInt(tenure);

    // EMI formula
    const emiValue = (
      (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
      (Math.pow(1 + monthlyRate, months) - 1)
    ).toFixed(2);

    setEmi(emiValue);
  };

  return (
    <div className="emi-container">
      <h1 className="emi">EMI Calculator</h1>
      <div className="input-group">
        <h2>Principal Amount</h2>
        <input
          type="number"
          value={principal}
          onChange={(e) => setPrincipal(e.target.value)}
          placeholder="Enter loan amount"
        />
      </div>
      <div className="input-group">
        <h2>Interest Rate (Annual)</h2>
        <input
          type="number"
          value={rate}
          onChange={(e) => setRate(e.target.value)}
          placeholder="Enter interest rate"
        />
      </div>
      <div className="input-group">
        <h2>Tenure (in months)</h2>
        <input
          type="number"
          value={tenure}
          onChange={(e) => setTenure(e.target.value)}
          placeholder="Enter loan tenure"
        />
      </div>
      <button className="submit-btn" onClick={calculateEmi}>
        Calculate EMI
      </button>
      {emi && (
        <div className="result">
          <h2>EMI: ₹{emi}</h2>
        </div>
      )}
    </div>
  );
}

export default App;
