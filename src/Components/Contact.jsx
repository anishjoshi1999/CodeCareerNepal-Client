import React from "react";
import "../App.css";

function Contact() {
  return (
    <div>
      <div className="bg-light">
        <div className="container py-5">
          <div className="row h-100 align-items-center py-5">
            <div className="col-lg-6">
              <h1 className="display-4">
                <i class="bx bx-envelope"></i> Contact Us
              </h1>
              <p className="lead text-muted mb-0">
                Get in touch with us for any inquiries or feedback.
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
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h2 className="font-weight-light">Contact Information</h2>
              <p className="font-italic text-muted mb-4">
                Feel free to reach out to us through the following channels:
              </p>
              <ul className="list-unstyled mb-0">
                <li>
                  <i className="fa fa-envelope text-primary"></i> Email:
                  contact@codecareernepal.com
                </li>
                <li>
                  <i className="fa fa-phone text-primary"></i> Phone: +977 (986)
                  367-9399
                </li>
                <li>
                  <i className="fa fa-map-marker text-primary"></i> Address:
                  Sankhamul-1, Baneshwor, Kathmandu
                </li>
              </ul>
            </div>
            <div className="col-lg-6">
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    id="message"
                    rows="4"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn btn-light px-5 rounded-pill shadow-sm custom-hover-effect"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
