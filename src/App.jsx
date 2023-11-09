import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import JobDetails from "./Components/JobDetails.jsx";
import About from "./Components/About.jsx";
import Contact from "./Components/Contact.jsx";
import Navbar from "../src/Components/Navbar.jsx";
import Footer from "../src/Components/Footer.jsx";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/:id" element={<JobDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
