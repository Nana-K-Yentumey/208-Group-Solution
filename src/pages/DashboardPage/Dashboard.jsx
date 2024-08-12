import Navbar2 from "../../components/Navbar2/Navbar2";
import Footer from "../../components/Footer/Footer";
import FeesOwed from "../../components/Graph/FeesOwed";
import TimeSpentStudying from "../../components/Graph/TimeSpentStudying";
import InstrumentsBeingStudied from "../../components/Graph/InstrumentsBeingStudied";
import Timetable from "../../components/Graph/Timetable";
import "./dashboard.css";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  Legend,
  Tooltip,
} from "chart.js";

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  Legend,
  Tooltip
);

function Dashboard() {
  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "My First dataset",
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: "rgba(75,192,192,1)",
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Growth Chart",
      },
    },
  };

  return (
    <div className="container">
      <Navbar2 />
      <div className="dashboard">
        <div className="miniInfo">
          <div className="tiles">
            <FeesOwed />
            <TimeSpentStudying />
            <InstrumentsBeingStudied />
          </div>
          <div className="otherStuff">
            <div className="chart">
              <Line data={data} options={options} style={{}} />
            </div>
            <div className="timetable">
              <Timetable style={{}} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Dashboard;
