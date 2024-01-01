import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import JobDetails from "./Components/JobDetails.tsx";
import Jobs from "./Components/Jobs.tsx";
import About from "./Components/About.tsx";
import Contact from "./Components/Contact.tsx";
import Navbar from "./Components/Partials/Navbar.tsx";
import Footer from "./Components/Partials/Footer.tsx";

function App() {
    return (
        <>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/jobs" element={<Jobs />} />
                    <Route path="/jobs/:id" element={<JobDetails />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
                <Footer />
            </Router>
        </>
    );
}

export default App;
