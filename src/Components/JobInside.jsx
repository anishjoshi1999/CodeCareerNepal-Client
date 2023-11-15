import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loader from "./Loader";

function JobInside() {
  const { id, job } = useParams();
  const [jobDetails, setJobDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchJobDetails() {
      try {
        const response = await axios.get(
          `https://codecareernepal.cyclic.app/api/${id}/${job}`
        );
        setJobDetails(response.data);
        setLoading(false);
      } catch (error) {
        setError("Error fetching job details");
        setLoading(false);
      }
    }

    fetchJobDetails();
  }, [id, job]);

  return (
    <div className="container mt-5">
      {loading ? (
        <Loader />
      ) : error ? (
        <div className="alert alert-danger">{error}</div>
      ) : (
        <div>
          <div className="card mb-4">
            <div className="card-body">
              <h1 className="display-4">{job}</h1>
              <p className="lead text-muted mb-4">{id}</p>

              <h3 className="card-title">Requirements</h3>
              {jobDetails.jobRequirements && jobDetails.jobRequirements.length > 0 ? (
                <ul className="list-group">
                  {jobDetails.jobRequirements.map((requirement, index) => (
                    <li key={index} className="list-group-item">{requirement}</li>
                  ))}
                </ul>
              ) : (
                <p>No requirements available</p>
              )}
            </div>
          </div>

          <div className="text-center">
            <a
              href={jobDetails.jobUrl}
              target="_blank"
              className="btn btn-light px-5 rounded-pill shadow-sm custom-hover-effect"
              rel="noopener noreferrer"
            >
              Apply Now
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default JobInside;
