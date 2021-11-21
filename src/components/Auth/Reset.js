import "./auth.css";
import { useReducer } from "react";
import authreducer from "../../reducers/authreducer";
import Error from "./Error";

const defaultState = {
  password: "",
};

const Reset = () => {
  const [formstate, dispatchState] = useReducer(authreducer, defaultState);
  const [errors, dispatchErrors] = useReducer(authreducer, defaultState);

  return (
    <div className="App">
      <section>
        <div class="container active">
          <div class="user signupBx">
            <div class="formBx">
              <form action="" onsubmit="return false;">
                <h2>Reset Password</h2>

                <input
                  type="password"
                  name="password"
                  placeholder="Create Password"
                  onChange={(e) =>
                    dispatchState({
                      type: "UPDATE",
                      data: [e.target.name, e.target.value],
                    })
                  }
                  onBlur={(e) => {
                    dispatchErrors({
                      type: "CHECK",
                      data: [formstate, e.target.name],
                    });
                  }}
                />
                <Error error={errors.password} />
                <input
                  type="password"
                  name="password"
                  placeholder="Confirm Password"
                  onChange={(e) =>
                    dispatchState({
                      type: "UPDATE",
                      data: [e.target.name, e.target.value],
                    })
                  }
                  onBlur={(e) => {
                    dispatchErrors({
                      type: "CHECK",
                      data: [formstate, e.target.name],
                    });
                  }}
                />
                <Error error={errors.password} />
                <button type="submit" className="btn btn-primary">
                  Continue
                </button>
              </form>
            </div>
            <div class="imgBx">
              <img
                src="https://www.diagnosio.com/wp-content/uploads/2020/12/AI-bias.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reset;
