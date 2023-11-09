import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loader from "./Loader";

function JobDetails() {
  const { id } = useParams();
  const [allListing, setAllListing] = useState({
    companyName: "",
    totalJobs: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `https://codecareernepal.cyclic.app/api/${id}`
        );
        setAllListing(response.data[0]);
        setLoading(false);
      } catch (error) {
        setError("Error fetching job details");
        setLoading(false);
      }
    }

    fetchData();
  }, [id]);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div className="bg-light py-5">
          <div className="container py-5">
            <div className="row align-items-center mb-5">
              <div className="col-lg-6 order-2 order-lg-1">
                <h1 className="display-4">{allListing.companyName.toUpperCase()}</h1>
                <p className="lead text-muted mb-0">
                  Latest Job Openings.
                </p>
              </div>
              <div className="col-lg-5 px-5 mx-auto order-1 order-lg-2">
                <img
                  src="https://bootstrapious.com/i/snippets/sn-about/illus.png"
                  alt=""
                  className="img-fluid mb-4 mb-lg-0"
                />
              </div>
            </div>
            <div className="row">
              {allListing.totalJobs.map((element, index) => (
                <div key={index} className="col-lg-4 col-md-6 col-sm-12">
                  <div className="card p-3 mb-2">
                    <h3 className="font-weight-light">{element.jobName}</h3>
                    <p className="font-italic text-muted mb-4">
                      No. of Vacancy/s: <span id="badge-custom-bg">2</span>
                    </p>
                    <a href={element.jobUrl} className="btn btn-light px-5 rounded-pill shadow-sm custom-hover-effect">
                      Apply
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default JobDetails;
