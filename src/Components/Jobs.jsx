import React from "react";
import Loader from "./Loader";
import { Link } from "react-router-dom";
import { useJobs } from "../store/useJobs";
import { useSearch } from "../store/useSearch";
import { formatDistanceToNow } from "date-fns";
function Jobs() {
  const { allListings, loading, error } = useJobs();
  const { filteredList: filteredListings, inputRef } = useSearch(
    allListings ? allListings : [],
    "companyName"
  );

  return (
    <>
      <div>
        {loading ? (
          <Loader />
        ) : error ? (
          <p>Error: {error}</p>
        ) : (
          <div className="container py-5">
            <div className="col-lg-6 mx-auto text-center mb-3">
              <h1 className="display-4 fw-bold">Latest IT Job Openings</h1>
              <p className="lead text-muted mb-0 fw-bold">All Over Nepal</p>
              <div style={{ margin: "20px 0" }}>
                <input
                  type="text"
                  placeholder="Search by Company Name"
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
              {filteredListings.map((element, index) => (
                <div key={index} className="col-lg-4 col-md-6 mb-4">
                  <div className="card h-100 p-3">
                    <div className="d-flex justify-content-between">
                      <div className="d-flex flex-row align-items-center">
                        <div className="icon">
                          <i
                            className="bx bx-code-alt bx-rotate-180"
                            alt="Code Icon"
                          ></i>
                        </div>
                        <div className="ms-2 c-details">
                          <h6 className="mb-0">
                            {element.companyName.toUpperCase()}
                          </h6>
                          <span>
                            {`Last updated ${formatDistanceToNow(
                              new Date(element.updatedAt),
                              { addSuffix: true }
                            )}`}
                          </span>
                        </div>
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
                    <div className="mt-auto pt-4">
                      <Link
                        to={`/jobs/${element.companyName}`}
                        className="btn btn-light px-5 rounded-pill shadow-sm custom-hover-effect"
                      >
                        More
                      </Link>
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
