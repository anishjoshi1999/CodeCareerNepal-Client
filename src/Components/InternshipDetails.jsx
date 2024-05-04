import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "./Loader";

function InternshipDetails() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filteredList, setFilteredList] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://codecareernepal-server.onrender.com/api/intern"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        let temp = data.filter((element) => {
          return element.companyName === id;
        });
        // Iterate over each company entry in the data
        temp.forEach((companyData) => {
          let companyName = companyData.companyName;

          // Iterate over each job entry in the company data
          companyData.totalJobs.forEach((job) => {
            // Add the company name to the job entry
            job.companyName = companyName;
          });
        });
        console.log(temp)
        setFilteredList(temp);
        setLoading(false);
      } catch (error) {
        setError("Error fetching data");
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      {loading ? (
        <Loader />
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div className="container py-5">
           <div className="col-lg-6 mx-auto text-center mb-3">
            <h1 className="display-4 fw-bold">Internship/Traineeship </h1>
            <p className="lead text-muted mb-0 fw-bold">All Over Nepal</p>
            <div style={{ margin: "20px 0" }}>
            </div>
          </div>
          <div className="row">
            {filteredList[0].totalJobs.map((element, index) => {
              return (
                <div className="col-lg-4 col-md-6 mb-4">
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
                          <h6 className="mb-0">{element.companyName}</h6>
                          <span></span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4">
                      <h3 className="display-6">{element.jobName}</h3>
                    </div>
                    <div className="mt-auto pt-4">
                      <a
                        href={`${element.jobUrl}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-light px-5 rounded-pill shadow-sm custom-hover-effect"
                      >
                        See More
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default InternshipDetails;
