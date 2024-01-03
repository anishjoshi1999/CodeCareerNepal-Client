import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Loader from "../Components/Loader";

const JobContextData = createContext();
export const JobContext = () => {
  /** @type {[any[],Function]} */
  const [allListings, setAllListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`https://codecareer.onrender.com/api`);
        setAllListings(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.message || "Error fetching job listings");
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <JobContextData.Provider value={{ allListings, loading, error }}>
      {loading ? <Loader /> : error ? <p>Error: {error}</p> : <Outlet />}
    </JobContextData.Provider>
  );
};

export const useCompany = () => {
  /** @type {{allListings:{totalJobs:{jobName:string, jobUrl:string}[], companyName:string, [x:string]:any}[], loading:boolean, error:string}} */
  const data = useContext(JobContextData);
  if (!data)
    throw new Error(
      "JobContext is not available. Make sure you wrap the conponent in this context"
    );
  return data;
};

export const useJobForCompany = function (company) {
  const { allListings, ...states } = useCompany();
  const allListing = allListings.filter(
    (item) => item.companyName === company
  )[0].totalJobs;
  return { companyName: company, allListing, ...states };
};
