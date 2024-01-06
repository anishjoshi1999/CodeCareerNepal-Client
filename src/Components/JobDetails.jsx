import React from "react";
import { useParams } from "react-router-dom";
import Loader from "./Loader";
import { useJobForCompany } from "../store/useJobs";
import { useSearch } from "../store/useSearch";
import { formatDistanceToNow } from "date-fns";
import JobCard from "./cards/JobCard";

function JobDetails() {
  const { id } = useParams();
  const { allListing, companyName, loading, error } = useJobForCompany(id);
  const { filteredList, inputRef } = useSearch(
    allListing ? allListing : [],
    "jobName"
  );

  return loading ? (
    <Loader />
  ) : error ? (
    <p>{error}</p>
  ) : (
    <div className="container py-5">
      <div className="col-lg-6 mx-auto text-center mb-3">
        <h1 className="display-4">{companyName?.toUpperCase()}</h1>
        <p className="lead text-muted mb-0">Latest Job Openings.</p>
        <div style={{ margin: "20px 0" }}>
          <input
            type="text"
            placeholder="Search by Job Title"
            ref={inputRef}
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            }}
          />
        </div>
      </div>
      <div className="row">
        {filteredList.map((element, index) => (
          <JobCard
            key={index}
            companyName={companyName}
            jobName={element.jobName}
            jobUrl={element.jobUrl}
            updatedAt={element.updatedAt}
          />
        ))}
      </div>
    </div>
  );
}

export default JobDetails;
