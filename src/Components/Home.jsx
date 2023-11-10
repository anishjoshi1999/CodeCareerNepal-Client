import React from "react";
import { Link } from "react-router-dom";

import "../App.css";

function Home() {
  return (
    <>
      <div>
        <div className="bg-light">
          <div className="container py-5">
            <div className="row h-100 align-items-center py-5">
              <div className="col-lg-6">
                <h1 className="display-4">Job Listings</h1>
                <div className="lead text-muted mb-0">
                  <div className="typing-demo">Explore latest IT job openings.</div>
                </div>
                <Link to="/jobs" className="btn btn-light px-5 rounded-pill shadow-sm custom-hover-effect mt-3">
                <i className='bx bx-search-alt-2'></i>  Explore IT Openings
              </Link>
              </div>
              <div className="col-lg-6 d-none d-lg-block">
                <img
                  src="https://bootstrapious.com/i/snippets/sn-about/illus.png"
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
