import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import { createContext, useContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Loader from "../Components/Loader";

const JobContextData = createContext();
export const JobContext = () => {
  const [allListings, setAllListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `https://codecareer.onrender.com/api`,
          { params: { page: page } }
        );
        setAllListings((prevListings) => [...prevListings, ...response.data]);
        setHasMore(response.data.length > 0);
        setLoading(false);
      } catch (error) {
        setError(error.message || "Error fetching job listings");
        setLoading(false);
      }
    }

    fetchData();
  }, [page]);

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <JobContextData.Provider value={{ allListings, loading, error }}>
      <InfiniteScroll
        dataLength={allListings.length}
        next={loadMore}
        hasMore={hasMore}
        loader={<Loader />}
      >
        {loading ? <Loader /> : error ? <p>Error: {error}</p> : <Outlet />}
      </InfiniteScroll>
    </JobContextData.Provider>
  );
};

export const useJobs = () => {
  const data = useContext(JobContextData);
  if (!data)
    throw new Error(
      "JobContext is not available. Make sure you wrap the conponent in this context"
    );
  return data;
};

export const useJobForCompany = function (company) {
  const { allListings, ...states } = useJobs();
  const allListing = allListings.filter(
    (item) => item.companyName === company
  )[0].totalJobs;

  return { companyName: company, allListing, ...states };
};
