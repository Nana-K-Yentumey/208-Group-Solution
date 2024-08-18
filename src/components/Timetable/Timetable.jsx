import "../../pages/StudentDashboard/StudentDashboard.css";

const Timetable = () => {
  return (
    <table className="timetable">
      <thead>
        <tr>
          <td className="table-heading main-colum">Courses</td>
          <td className="table-heading middle-column">Content</td>
          <td className="table-heading last-column">Time</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="main-column">DRUM123</td>
          <td className="middle-column"></td>
          <td className="last-column">8:00 am</td>
        </tr>
        <tr>
          <td className="main-column">DRUM323</td>
          <td className="middle-column"></td>
          <td className="last-column">2:00 pm</td>
        </tr>
        <tr>
          <td className="main-column">DRUM123</td>
          <td className="middle-column"></td>
          <td className="last-column">7:00 pm</td>
        </tr>
        <tr>
          <td className="main-column">Gramophone (Admin)</td>
          <td className="middle-column"></td>
          <td className="last-column">9:00 pm</td>
        </tr>
        <tr>
          <td className="main-column">Gramophome (Admin)</td>
          <td className="middle-column"></td>
          <td className="last-column">5:00 pm</td>
        </tr>
        <tr className="trombone">
          <td className="main-column">Drum123</td>
          <td className="middle-column"></td>
          <td className="last-column">8:00 pm</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Timetable;
