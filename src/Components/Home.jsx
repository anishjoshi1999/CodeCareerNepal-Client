import React from "react";
import { Link } from "react-router-dom";
import Loader from "./Loader";
import { useCompany } from "../store/useJobs";

function Home() {
  const { allListings, loading, error } = useCompany();
  const totalJobs = allListings
    ? allListings.reduce((total, listing) => total + listing.totalJobs.length, 0)
    : 0;

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
                <Link
                  to="/company"
                  className="btn btn-light px-4 my-4 px-sm-5 rounded-pill shadow-sm custom-hover-effect"
                >
                  <i className="bx bx-search-alt-2"></i> Explore IT Companies
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
  );
}

export default Home;
