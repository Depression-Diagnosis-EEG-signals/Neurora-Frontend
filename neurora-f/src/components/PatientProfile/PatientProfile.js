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
                    <p className="text-secondary mb-1">Specialization</p>
                    <p className="text-muted font-size-sm">Hospital Name</p>
                    <button className="btn btn-outline-primary butn">
                      Message
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="card mb-3">
              <div className="card-body card-body-prof">
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Full Name</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">Doctor Name</div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Doctor ID</h6>
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
                    <h6 className="mb-0">Specialization</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">abcd</div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Qualificaton</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">abcd</div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-12">
                    <a className="btn btn-info " target="__blank">
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
            <div className=" row phead">
              <div className="col-sm-10">
                <h3>Patients:</h3>
              </div>
              <div className="col-sm-2">
                <Button className=" btn bbb" as={Link} to={"/addpatinet"}>
                  Add Patient
                </Button>{" "}
              </div>
            </div>

            <div className="row">
              <div className="col-sm-3">
                <h5 className="pathd">
                  <i>Patient Name</i>
                </h5>
              </div>
              <div className="col-sm-9">
                <h5 className="pathd">
                  {" "}
                  <i>Patient ID</i>
                </h5>
              </div>
            </div>
            <div className="patients">
              <div className="row">
                <div className="col-sm-3">Pateint 1</div>
                <div className="col-sm-3">Pateint1 id</div>
                <div className="col-sm-3">
                  <a href="/upload" className="linkclr">
                    <u>Upload EEG</u>
                  </a>
                </div>
                <div className="col-sm-3">
                  <a href="/report" className="linkclr">
                    <u>View report</u>
                  </a>
                </div>
                
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-3">Pateint 2</div>
                <div className="col-sm-3 ">Pateint2 id</div>
                <div className="col-sm-3">
                  <a href="/upload" className="linkclr">
                    <u>Upload EEG</u>
                  </a>
                </div>
                <div className="col-sm-3">
                  <a href="/report" className="linkclr">
                    <u>View report</u>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PatientProfile;
