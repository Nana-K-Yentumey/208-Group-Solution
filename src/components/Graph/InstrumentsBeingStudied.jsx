import { useState, useEffect } from "react";
import axios from "axios";
import "./dashboardInfo.css";

function InstrumentsBeingStudied() {
  const [instruments, setInstruments] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchInstruments = async () => {
      try {
        const response = await axios.get("/api/instruments"); // Replace with your actual API endpoint
        setInstruments(response.data.instruments);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchInstruments();
  }, []);

  if (loading) {
    return (
      <div className="infoCard">
        <h1>Instruments</h1>
        <h2>Loading...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="infoCard">
        <h1>Instruments</h1>
        <h2>Error: {error}</h2>
      </div>
    );
  }

  return (
    <div className="infoCard">
      <h1>Instruments</h1>
      <h2>{instruments}</h2>
    </div>
  );
}

export default InstrumentsBeingStudied;
