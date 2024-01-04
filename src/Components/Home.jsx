import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from "./Loader";
import { Link } from "react-router-dom";

import "../App.css";

function Home() {
  const [allListings, setAllListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const totalJobs = allListings
    ? allListings.reduce(
        (total, listing) => total + listing.totalJobs.length,
        0
      )
    : 0;

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`https://codecareer.onrender.com/api`);
        setAllListings(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.message || "Error fetching job listings");
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <>
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
                  <h1 className="display-4"> Job Listings</h1>

                  <div className="lead text-muted mb-4">
                    <div className="typing-demo text-center">
                      Explore {totalJobs} latest IT job openings.
                    </div>
                  </div>
                  <Link
                    to="/jobs"
                    className="btn btn-light px-4 px-sm-5 rounded-pill shadow-sm custom-hover-effect"
                  >
                    <i className="bx bx-search-alt-2"></i> Explore IT Openings
                  </Link>
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
    </>
  );
}

export default Home;
