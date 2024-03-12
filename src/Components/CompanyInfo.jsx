import React, { useState, useEffect } from 'react';
import JobCard from "./cards/JobCard";
import Loader from "./Loader";

function CompanyInfo() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://codecareernepal-server.onrender.com/api/show");
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
            {filteredList.map((element, index) => {
              let temp = `des,${element.Description}`; // Preprocess data here
              return (
                <JobCard
                  key={index}
                  companyName={element.Name}
                  jobName={temp}
                  jobUrl={element.Website}
                  updatedAt={element.Location}
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default CompanyInfo;
