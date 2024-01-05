import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import JobDetails from "./Components/JobDetails.jsx";
import Jobs from "./Components/Jobs.jsx";
import Companies from "./Components/Companies.jsx";
import About from "./Components/About.jsx";
import Contact from "./Components/Contact.jsx";
import Navbar from "./Components/Partials/Navbar.jsx";
import Footer from "./Components/Partials/Footer.jsx";
import { JobContext } from "./store/useJobs.jsx";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<JobContext />}>
            <Route index element={<Home />} />
            <Route path="jobs" element={<Jobs />} />
            <Route path="company" element={<Companies />} />
            <Route path="jobs/:id" element={<JobDetails />} />
          </Route>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
