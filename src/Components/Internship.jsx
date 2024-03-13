import React, { useState, useEffect } from 'react';
import Loader from "./Loader";
import { Link } from "react-router-dom";

function Internship() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [filteredList, setFilteredList] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch("https://codecareernepal-server.onrender.com/api/intern");
          if (!response.ok) {
            throw new Error('Failed to fetch data');
          }
          const data = await response.json();
          console.log(data)
          setFilteredList(data);
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
                    <div className="row">
                        {filteredList.map((element, index) => (
                            <div className="col-lg-4 col-md-6 mb-4" key={index}>
                                <div className="card h-100 p-3">
                                    <div className="d-flex justify-content-between">
                                        <div className="d-flex flex-row align-items-center">
                                            <div className="icon">
                                                <i className="bx bx-code-alt bx-rotate-180" alt="Code Icon"></i>
                                            </div>
                                            <div className="ms-2 c-details">
                                                <h6 className="mb-0">{element.companyName}</h6>
                                                <span></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <h3 className="display-6">Current Opening: {element.totalJobs.length}</h3>
                                    </div>
                                    <div className="mt-auto pt-4">
                                        <Link
                                            to={`/internship/${element.companyName}`}
                                            className="btn btn-light px-5 rounded-pill shadow-sm custom-hover-effect"
                                        >
                                            See More
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}

export default Internship;
