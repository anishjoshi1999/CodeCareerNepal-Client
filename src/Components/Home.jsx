import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Loader from "./Loader";
import { useCompany } from "../store/useJobs";

function Home() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalJobs, setTotalJobs] = useState(0);
  const [totalIntern, setInterns] = useState(0);
  const [totaltotalCompanies, settotalCompanies] = useState(0);

  useEffect(() => {
    const fetchTotalJobs = async () => {
      try {
        const response = await fetch("https://codecareernepal-server.onrender.com/api/total");
        const data = await response.json();
        setTotalJobs(data.totalJobs);
        setInterns(data.totalInterns);
        settotalCompanies(data.totalCompanies);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching total jobs:", error);
        setError("Failed to fetch total jobs");
        setLoading(false);
      }
    };

    fetchTotalJobs();
  }, []);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <div className="bg-light">
          <div className="container py-5">
            <div className="row align-items-center">
              <div className="col-md-12 col-lg-6 mb-4 mb-lg-0 d-flex flex-column align-items-center">
              
                <h1 className="display-4">{Math.trunc(totalJobs / 5) * 5}+ Latest Job Listings</h1>
                <h1 className="display-6">{totalIntern} Traineeships/Internships</h1>
               

                <div className="lead text-muted mb-4">
                  <div className="typing-demo text-center">
                    Across {Math.trunc(totaltotalCompanies / 5) * 5}+ IT Companies in Nepal
                  </div>
                </div>
                <div className="row-buttons">
                <Link
                  to="/company"
                  className="btn btn-light px-4 my-2 px-sm-5 rounded-pill shadow-sm custom-hover-effect"
                >
                  <i className="bx bx-search-alt-2"></i>By Company
                </Link>
                <Link
                  to="/jobs"
                  className="btn btn-light px-4 my-2 px-sm-5 rounded-pill shadow-sm custom-hover-effect"
                >
                  <i className="bx bx-search-alt-2"></i>By Jobs
                </Link>
                </div>
              </div>
              <div className="col-md-12 col-lg-6 text-center text-lg-right">
                <img
                  src="https://bootstrapious.com/i/snippets/sn-about/illus.png"
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
