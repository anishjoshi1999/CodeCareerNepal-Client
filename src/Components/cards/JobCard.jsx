/**
 *
 * @param {{companyName:string,jobName:string,jobUrl:string}} props
 * @returns
 */
export default function JobCard(props) {
  return (
    <div key="{index}" className="col-lg-4 col-md-6 mb-4">
      <div className="card h-100 p-3">
        <div className="d-flex justify-content-between">
          <div className="d-flex flex-row align-items-center">
            <div className="icon">
              <i className="bx bx-code-alt bx-rotate-180" alt="Code Icon"></i>
            </div>
            <div className="ms-2 c-details">
              <h6 className="mb-0">{props.companyName}</h6>
              <span>1 day ago</span>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <h3 className="display-6">{props.jobName}</h3>
        </div>
        <div className="mt-auto pt-4">
          <a
            href={props.jobUrl}
            target="_blank"
            className="btn btn-light px-5 rounded-pill shadow-sm custom-hover-effect"
          >
            Apply
          </a>
        </div>
      </div>
    </div>
  );
}
