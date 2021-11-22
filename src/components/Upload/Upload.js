import "./Upload.css";
import { useReducer } from "react";
import moment from "moment";
import axios from "axios";
import formreducer from "../../reducers/formreducer";
import Error from "../Error/Error";
import { useNavigate } from "react-router-dom";

const defaultState = {
  doctor_id: "",
  date: "",
  patient_id: "",
  type: "",
  file: "",
};

const Upload = () => {
  const [formstate, dispatchState] = useReducer(formreducer, defaultState);
  const [errors, dispatchErrors] = useReducer(formreducer, defaultState);

  let navigate = useNavigate();

  const handler = (e) => {
    e.preventDefault();

    let data = new FormData();
    data.append("file", formstate.file);
    delete formstate.file;
    data.append("data", JSON.stringify(formstate));
    axios
      .post("http://localhost:5000/api", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        alert("Successfully Uploaded");
        setTimeout(function () {
          navigate("/report");
        }, 500);
        console.log(response.data);
      })
      .catch((error) => {
        alert("Failed");
        console.log(error);
      });

    // navigate('/componentB',{state:{id:1,name:'sabaoon'}});
  };

  return (
    <div class="Upload">
      <p class="head">Upload EEG Signals</p>
      <div class="uform">
        <form onSubmit={handler}>
          <div class="row">
            <div class="col-sm-6 left">
              <div class="form-group form-group mb-3">
                <label>Doctor ID</label>
                <input
                  class="form-control"
                  type="text"
                  name="doctor_id"
                  placeholder="Enter Doctor ID"
                  onChange={(e) =>
                    dispatchState({
                      type: "UPDATE",
                      data: [e.target.name, e.target.value],
                    })
                  }
                  onBlur={(e) => {
                    dispatchErrors({
                      type: "CHECK_UPLOAD",
                      data: [formstate, e.target.name],
                    });
                  }}
                />
                <Error error={errors.doctor_id} />
              </div>
            </div>

            <div class="col-sm-6 right">
              <div
                class="form-group form-group mb-3"
                controlId="formPlaintextPassword"
              >
                <label>Date of recording EEG</label>

                <input
                  class="form-control"
                  type="date"
                  name="date"
                  placeholder="dd/mm/yyyy"
                  max={moment().format("YYYY-MM-DD")}
                  onChange={(e) =>
                    dispatchState({
                      type: "UPDATE",
                      data: [e.target.name, e.target.value],
                    })
                  }
                  onBlur={(e) => {
                    dispatchErrors({
                      type: "CHECK_UPLOAD",
                      data: [formstate, e.target.name],
                    });
                  }}
                />
                <Error error={errors.date} />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-6 left">
              <div class="form-group mb-3" controlId="formPlaintextPassword">
                <label>Patient ID</label>

                <input
                  class="form-control"
                  type="text"
                  name="patient_id"
                  placeholder="Enter patient ID"
                  onChange={(e) =>
                    dispatchState({
                      type: "UPDATE",
                      data: [e.target.name, e.target.value],
                    })
                  }
                  onBlur={(e) => {
                    dispatchErrors({
                      type: "CHECK_UPLOAD",
                      data: [formstate, e.target.name],
                    });
                  }}
                />
                <Error error={errors.patient_id} />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-6 left"></div>
            <div class="col-sm-6 right">
              <div class="form-group mb-3" controlId="formPlaintextPassword">
                <label>Recording Type</label>
                <select
                  name="type"
                  placeholder="Select"
                  onChange={(e) =>
                    dispatchState({
                      type: "UPDATE",
                      data: [e.target.name, e.target.value],
                    })
                  }
                  onBlur={(e) => {
                    dispatchErrors({
                      type: "CHECK_UPLOAD",
                      data: [formstate, e.target.name],
                    });
                  }}
                >
                  <option value="" disabled selected>
                    Select
                  </option>
                  <option value="Eyes Closed">Eyes Closed</option>
                  <option value="Eyes Opened">Eyes Opened</option>
                  <option value="Task">Task</option>
                </select>
                <Error error={errors.type} />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-6 left">
              <div controlId="formFile" class="mb-3 ">
                <label>Upload recording</label>
                <input
                  class="form-control"
                  type="file"
                  name="file"
                  // value={formstate.file}
                  onChange={(e) =>
                    dispatchState({
                      type: "UPDATE",
                      data: [e.target.name, e.target.files[0]],
                    })
                  }
                  onBlur={(e) => {
                    dispatchErrors({
                      type: "CHECK_UPLOAD",
                      data: [formstate, e.target.name],
                    });
                  }}
                />
                <Error error={errors.file} />
              </div>
            </div>
            <div class="col-sm-6 ">
              <div class="btt">
                <button
                  class="btn btn-primary"
                  type="submit"
                  // onClick={(e) => {
                  //   const errors_present =
                  //     !Object.values(errors).every((x) => x === "") ||
                  //     Object.values(formstate).some((x) => x === "");
                  //   console.log(errors_present);

                  //   if (errors_present) {
                  //     e.preventDefault();
                  //   }
                  // }}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Upload;
