import "./PatientProfile.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

function PatientProfile() {
  return (
    <div className="container">
      <div className="main-body">
        <div className="row gutters-sm">
          <div className="col-md-4 mb-3">
            <div className="card">
              <div className="card-body card-body-prof">
                <div className="d-flex flex-column align-items-center text-center">
                  <img
                    src="https://bootdey.com/img/Content/avatar/avatar7.png"
                    alt="Admin"
                    className="rounded-circle"
                    width={150}
                  />
                  <div className="mt-3">
                    <h4>Pateint Name</h4>
                    <p>Doctor: (Doctor's name) </p>
                    <p>Hospital Name  </p>
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="card mb-3">
              <div className="card-body card-body-prof rightcard">
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Full Name</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">Patient Name</div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Patient ID</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">1234</div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Phone</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">(239) 816-9029</div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Address</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">abcd</div>
                </div>
                <hr />
               
               
                <div className="row">
                  <div className="col-sm-12">
                    <a className="btn btn-info" href="/editpatient">
                      Edit
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-body card-body-prof patcard">
         

            <div className="row">
              <div className="col-sm-6">
                <h5 className="pathd">
                  Medical History
                </h5>
              </div>
              <div className="col-sm-6">
                <h5 className="pathd">
                <a href="/report" className="linkclr">
                    <u>View report</u>
                  </a>
                </h5>
              </div>
            </div>
     
          </div>
        </div>
      </div>
    </div>
  );
}

export default PatientProfile;
