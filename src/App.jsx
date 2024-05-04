import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import JobDetails from "./Components/JobDetails.jsx";
import Jobs from "./Components/Jobs.jsx";
import Companies from "./Components/Companies.jsx";
import Contribute from "./Components/Contribute.jsx";
import Contact from "./Components/Contact.jsx";
import Navbar from "./Components/Partials/Navbar.jsx";
import Footer from "./Components/Partials/Footer.jsx";
import CompanyInfo from "./Components/CompanyInfo.jsx";
import Internship from "./Components/Internship.jsx";
import { JobContext } from "./store/useJobs.jsx";
import InternshipDetails from "./Components/InternshipDetails.jsx";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<JobContext />}>
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/company" element={<Companies />} />
            <Route path="/jobs/:id" element={<JobDetails />} />
          </Route>
          <Route path="/internship" element={<Internship />} />
          <Route path="/internship/:id" element={<InternshipDetails />} />
          <Route path="/companies" element={<CompanyInfo />} />
          <Route path="/contribute" element={<Contribute />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
