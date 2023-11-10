import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Loader from "./Loader";
import { Link } from "react-router-dom";

function Pagination({ onPageChange, hasNextPage }) {
  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <button className="btn btn-light px-5 rounded-pill shadow-sm custom-hover-effect" onClick={onPageChange} disabled={!hasNextPage}>
        Load More
      </button>
    </div>
  );
}

function Jobs() {
  const [allListings, setAllListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(true);
  const loaderRef = useRef(null);
  const pageSize = 6; // Set your desired page size

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `https://codecareernepal.cyclic.app/api?page=${pageNumber}&pageSize=${pageSize}`
        );

        if (pageNumber === 1) {
          // Set allListings only after the first successful API call
          setAllListings(response.data);
        } else {
          // Concatenate the new data for subsequent pages
          setAllListings((prevListings) => [...prevListings, ...response.data]);
        }

        setHasNextPage(response.data.length === pageSize); // Check if there is more data
        setLoading(false);
      } catch (error) {
        setError("Error fetching job listings");
        setLoading(false);
      }
    }

    fetchData();
  }, [pageNumber, pageSize]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasNextPage) {
          setPageNumber((prevPageNumber) => prevPageNumber + 1);
        }
      },
      { threshold: 1 }
    );

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => {
      if (loaderRef.current) {
        observer.unobserve(loaderRef.current);
      }
    };
  }, [loaderRef, hasNextPage]);

  const handlePageChange = () => {
    setPageNumber((prevPageNumber) => prevPageNumber + 1);
  };

  return (
    <>
      <div>
        {loading ? (
          <Loader />
        ) : error ? (
          <p>{error}</p>
        ) : (
          <div className="container py-5">
            <div className="col-lg-6 mx-auto text-center mb-3"> {/* Center the content */}
                <h1 className="display-4 fw-bold">Latest IT Job Openings</h1>
                <p className="lead text-muted mb-0 fw-bold">
                  All Over Nepal
                </p>
              </div>
            <div className="row">
              {allListings.map((element, index) => (
                <div key={index} className="col-lg-4 col-md-6 mb-4">
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
            <Pagination onPageChange={handlePageChange} hasNextPage={hasNextPage} />
          </div>
        )}
      </div>
    </>
  );
}

export default Jobs;
