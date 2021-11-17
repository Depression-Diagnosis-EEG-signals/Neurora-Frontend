import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Profile from "./components/Profile/Profile";
import Home from "./components/Home/Home";
import Navi from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Upload from "./components/Upload/Upload";
import Forgot from "./components/ForgotPassword/Forgot";

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
