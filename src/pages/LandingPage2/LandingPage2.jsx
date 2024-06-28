/* eslint-disable react/no-unescaped-entities */
import AppointementCard from "../../components/AppointmentCard/AppointementCard";
import Footer from "../../components/Footer/Footer";
import Navbar2 from "../../components/Navbar2/Navbar2";
import "../LandingPage2/LandingPage2.css";

function LandingPage2() {
  const appointments = [
    {
      id: 1,
      instrument: "Piano",
      day: "Monday and Wednesday",
      time: "8:00am to 1:00pm",
      image: "src/assets/icons/piano-25.png",
    },
    {
      id: 2,
      instrument: "Saxophone",
      day: "Friday",
      time: "3:00pm to 6:00pm",
      image: "src/assets/icons/saxophone-24.png",
    },
    {
      id: 3,
      instrument: "Voice",
      day: "Saturday",
      time: "10:00am to 1:00pm",
      image: "src/assets/icons/voice-30.png",
    },
    {
      id: 4,
      instrument: "Softcore Lofi",
      day: "Thursday",
      time: "2:00pm to 4:00pm",
      image: "src/assets/icons/disc-24.png",
    },
  ];
  return (
    <div>
      <Navbar2 />

      <div className="main-section">
        <h1
          style={{
            textAlign: "center",
            marginBottom: "10px",
            fontSize: "55px",
          }}
        >
          COURSES
        </h1>
        <p style={{ textAlign: "center", color: "gray" }}>
          The courses you have signed up for so far!
        </p>

        <div className="wrapper-1">
          <div className="contact-tutor">
            <h1>CONTACT YOUR TUTOR</h1>
            <p style={{ color: "gray" }}>
              Get in touch with your tutor for this course.
            </p>
            <button className="contact-btn">CONTACT US</button>
          </div>

          <img
            className="image"
            src="src\assets\Images\ContactTutor.png"
            alt=""
          />
        </div>

        <div className="wrapper-1">
          <img
            className="image"
            src="src\assets\Images\announcements.png"
            alt=""
          />

          <div className="contact-tutor spacing">
            <h1>ANNOUNCEMENTS</h1>
            <p style={{ color: "gray" }}> We've got some big coming up. Yay!</p>
          </div>
        </div>

        <div className="class-appointments">
          <h2>Class Appointments</h2>
          <div className="appointments">
            {appointments.map((item) => (
              <AppointementCard appointment={item} key={item.key} />
            ))}
          </div>
        </div>
      </div>

      <div className="register-info">
        <p style={{ color: "#c3a71d", textWrap: "wrap" }}>
          Want to register a new course?  <span>Click the button below to register.</span>
        </p>
        <button className="contact-btn">REGISTER</button>
      </div>
      <Footer />
    </div>
  );
}

export default LandingPage2;
