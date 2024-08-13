import "../../pages/StudentDashboard/StudentDashboard.css";

const Timetable = () => {
  return (
    <table className="timetable">
      <thead>
        <tr>
          <td className="table-heading main-colum">Instrument</td>
          <td className="table-heading">Sessions</td>
          <td className="table-heading">Time</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="main-column">Voice</td>
          <td className="middle-column">4</td>
          <td className="last-column">8:00 am</td>
        </tr>
        <tr>
          <td className="main-column">Piano</td>
          <td className="middle-column">3</td>
          <td className="last-column">2:00 pm</td>
        </tr>
        <tr>
          <td className="main-column">Trumpet</td>
          <td className="middle-column">8</td>
          <td className="last-column">7:00 pm</td>
        </tr>
        <tr>
          <td className="main-column">Sax</td>
          <td className="middle-column">4</td>
          <td className="last-column">9:00 pm</td>
        </tr>
        <tr>
          <td className="main-column">Clarinet</td>
          <td className="middle-column">3</td>
          <td className="last-column">5:00 pm</td>
        </tr>
        <tr className="trombone">
          <td className="main-column">Trombone</td>
          <td className="middle-column">4</td>
          <td className="last-column">8:00 pm</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Timetable;
