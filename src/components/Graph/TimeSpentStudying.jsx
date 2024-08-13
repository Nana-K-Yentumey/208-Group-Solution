import { useState, useEffect } from "react";
import axios from "axios";
import "./dashboardInfo.css";

function TimeSpentStudying() {
  const [timeSpent, setTimeSpent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTimeSpent = async () => {
      try {
        const response = await axios.get("/api/timeSpent"); // Replace with your actual API endpoint
        setTimeSpent(response.data.timeSpent);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchTimeSpent();
  }, []);

  if (loading) {
    return (
      <div className="infoCard">
        <h1>Time Spent Studying</h1>
        <h2>Loading...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="infoCard">
        <h1>Time Spent Studying</h1>
        <h2>Error: {error}</h2>
      </div>
    );
  }

  return (
    <div className="infoCard">
      <h1>Time Spent Studying</h1>
      <h2>{timeSpent} hours</h2>
    </div>
  );
}

export default TimeSpentStudying;
