import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Profile from "./components/Profile/Profile";
import PatientProfile from "./components/PatientProfile/PatientProfile";
import Home from "./components/Home/Home";
import Navi from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import Upload from "./components/Upload/Upload";
import Forgot from "./components/Auth/Forgot";

function App() {
  return (
    <Router>
      <div className="App">
        <Navi />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/patientprofile" element={<PatientProfile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/forgot" element={<Forgot />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
