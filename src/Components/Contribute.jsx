import React from 'react'
import "../App.css";
function Contribute() {
  return (
    <>
      <div className="bg-light">
        <div className="container py-5">
          <div className="row h-100 align-items-center py-5">
            <div className="col-lg-6">
              <h1 className="display-4"><i class='bx bx-rocket'></i> Our Mission</h1>
              <p className="lead text-muted mb-0">
              At CodeCareerNepal, our mission is clear: to empower job seekers and IT companies by providing a centralized platform where talent meets opportunity. We believe that meaningful careers are built on the foundation of knowledge, passion, and the right opportunities. We are dedicated to connecting the most talented professionals with forward-thinking IT companies in Nepal.
              </p>
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

      <div className="bg-white py-5">
        <div className="container py-5">
          <div className="row align-items-center mb-5">
            <div className="col-lg-6 order-2 order-lg-1">
              <i className="fa fa-bar-chart fa-2x mb-3 text-primary"></i>
              <h2 className="font-weight-light">Who We Are</h2>
              <p className="font-italic text-muted mb-4">
              We are a group of passionate individuals who are deeply committed to the IT ecosystem in Nepal. Our team comprises tech enthusiasts, web developers, and data experts who understand the challenges and aspirations of both job seekers and employers in the industry. We are on a mission to simplify the job search process and facilitate the recruitment of top talent.
              </p>
              <a href="#" className="btn btn-light px-5 rounded-pill shadow-sm custom-hover-effect">
                Learn More
              </a>
            </div>
            <div className="col-lg-5 px-5 mx-auto order-1 order-lg-2">
              <img
                src="https://bootstrapious.com/i/snippets/sn-about/img-1.jpg"
                alt=""
                className="img-fluid mb-4 mb-lg-0"
              />
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-5 px-5 mx-auto">
              <img
                src="https://bootstrapious.com/i/snippets/sn-about/img-2.jpg"
                alt=""
                className="img-fluid mb-4 mb-lg-0"
              />
            </div>
            <div className="col-lg-6">
              <i className="fa fa-leaf fa-2x mb-3 text-primary"></i>
              <h2 className="font-weight-light">What We Do</h2>
              <ul className="font-italic text-muted mb-4">
                <li><span className='fw-bold'>Job Listings:</span> We gather and curate the latest job openings from Nepal's leading IT companies. Our comprehensive job listings cover a wide range of roles, from software development to project management and beyond.</li>
                <li><span className="fw-bold">Empowering Job Seekers:</span> We provide job seekers with a user-friendly platform to search for their dream IT jobs, offering detailed job descriptions, company insights, and application guidelines.</li>
                <li><span className="fw-bold">Assisting IT Companies:</span> We offer IT companies a valuable channel to reach the most qualified candidates, showcasing their job opportunities to a pool of skilled professionals.</li>
              </ul>
             
              <a href="#" className="btn btn-light px-5 rounded-pill shadow-sm custom-hover-effect">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-light py-5">
        <div className="container py-5">
          <div className="row mb-4">
            <div className="col-lg-5">
              <h2 className="display-4 font-weight-light">Contribute</h2>
            </div>
          </div>

          <div className="row text-center">
            <div className="col-xl-3 col-sm-6 mb-5">
              <div className="bg-white rounded shadow-sm py-5 px-4">
                <img
                  src="https://cdn.thenewstack.io/media/2023/11/bbe96b7d-simple-react-ssr-vite-express.jpg"
                  alt="FrontEnd Repository"
                  width="100"
                  className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                />
                <h5 className="mb-0"><a href="https://github.com/anishjoshi1999/CodeCareerNepal-Client" target="_blank">Front End</a></h5>
                <span className="small text-titlecase text-muted"> Vite: React.js</span>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 mb-5">
              <div className="bg-white rounded shadow-sm py-5 px-4">
                <img
                  src="https://img-b.udemycdn.com/course/750x422/4383266_d1bc.jpg"
                  alt="BackEnd Repository"
                  width="100"
                  className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                />
                <h5 className="mb-0"><a href="https://github.com/anishjoshi1999/CodeCareerNepal-Server" target="_blank">Back End</a></h5>
                <span className="small text-titlecase text-muted">Node.js, Express.js and MongoDB</span>
              </div>
            </div>
          </div>

          
        </div>
      </div>
    </>
  )
}

export default Contribute