import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../App.css";
import Loader from "./Loader";

function Jobs() {
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
        {loading ? (
          <Loader />
        ) : error ? (
          <p>{error}</p>
        ) : (
          <div className="container py-5">
            <div className="row">
              {allListings.map((element) => (
                <div
                  key={element.companyName}
                  className="col-lg-4 col-md-6 mb-4"
                >
                  <div className="card p-3">
                    <div className="d-flex justify-content-between">
                      <div className="d-flex flex-row align-items-center">
                        <div className="icon">
                          <i className="bx bx-code-alt bx-rotate-180"></i>
                        </div>
                        <div className="ms-2 c-details">
                          <h6 className="mb-0">
                            {element.companyName.toUpperCase()}
                          </h6>
                          <span>1 day ago</span>
                        </div>
                      </div>
                      <div className="badge">
                        <span>Location</span>
                      </div>
                    </div>
                    <div className="mt-4">
                      <h3 className="display-6">
                        Current Opening:{" "}
                        <span className="fw-bold">
                          {element.totalJobs.length}
                        </span>
                      </h3>
                    </div>
                    <div className="mt-4">
                      <Link to={`/jobs/${element.companyName}`} className="btn btn-light px-5 rounded-pill shadow-sm custom-hover-effect">More</Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Jobs;
