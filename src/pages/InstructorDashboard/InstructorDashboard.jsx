import Footer from "../../components/Footer/Footer";
import "./InstructorDashboard.css";
import NavbarInstructor from "../../components/Navbar2/NavbarInstructor";

const InstructorDashboard = () => {
  return (
    <main className="dashboard_main">
      <NavbarInstructor />
      <section className="dashboard_main_section">
        <h1>WELCOME BACK, Ampofo!</h1>
      </section>
      <Footer />
    </main>
  );
};

export default InstructorDashboard;
