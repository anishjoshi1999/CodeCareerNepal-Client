import { useCompany } from "../store/useJobs";
import { useSearch } from "../store/useSearch";
import JobCard from "./cards/JobCard";

export default function Jobs() {
  const { allListings, loading, error } = useCompany();
  const allJobs = allListings
    .map((listing) =>
      listing.totalJobs.map((i) => ({ company: listing.companyName, ...i }))
    )
    .flat();
  const { filteredList, inputRef } = useSearch(
    allJobs ? allJobs : [],
    "jobName",
    "company"
  );
  return (
    <div>
      {loading ? (
        <Loader />
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div className="container py-5">
          <div className="col-lg-6 mx-auto text-center mb-3">
            <h1 className="display-4 fw-bold">Latest IT Job Openings</h1>
            <p className="lead text-muted mb-0 fw-bold">All Over Nepal</p>
            <div style={{ margin: "20px 0" }}>
              <input
                type="text"
                placeholder="Search by Job Title or Company"
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
                companyName={element.company}
                jobName={element.jobName}
                jobUrl={element.jobUrl}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
