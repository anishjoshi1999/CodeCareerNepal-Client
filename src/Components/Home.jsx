import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../App.css";
import Loader from "./Loader";

function Home() {
  const [allListings, setAllListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "https://codecareernepal.cyclic.app/api"
        );
        setAllListings(response.data);
        setLoading(false);
      } catch (error) {
        setError("Error fetching job listings");
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <div>
        <div className="bg-light">
          <div className="container py-5">
            <div className="row h-100 align-items-center py-5">
              <div className="col-lg-6">
                <h1 className="display-4">Job Listings</h1>
                {/* <p className="lead text-muted mb-0">
                Explore the latest IT job openings.
              </p> */}
                <div className="lead text-muted mb-0">
                  <div className="typing-demo">Explore latest IT job openings.</div>
                </div>
                <Link to="/jobs" className="btn btn-light px-5 rounded-pill shadow-sm custom-hover-effect mt-3">
                <i class='bx bx-code-alt' ></i> Explore Jobs
              </Link>
              </div>
              <div className="col-lg-6 d-none d-lg-block">
                <img
                  src="https://bootstrapious.com/i/snippets/sn-about/illus.png"
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
