import "./Login.css";

const toggleForm = () => {
  const container = document.querySelector(".container");
  container.classList.toggle("active");
};

function Login() {
  return (
    <div className="App">
      <section>
        <div class="container">
          <div class="user signinBx">
            <div class="imgBx">
              <img
                src="https://www.statnews.com/wp-content/uploads/2020/01/AdobeStock_215322148-645x645.jpg"
                alt=""
              />
            </div>
            <div class="formBx">
              <form action="" onsubmit="return false;" autocomplete="on">
                <h2>Sign In</h2>
                <input type="text" name="" placeholder="Username" />
                <input type="password" name="" placeholder="Password" />
                <select id="role" name="role" placeholder="Select your Role">
                  <option value="" disabled selected>
                    Select your Role
                  </option>
                  <option value="Doctor">Doctor</option>
                  <option value="Patient">Patient</option>
                  <option value="Admin">Admin</option>
                </select>
                <input href="/home" type="submit" name="" value="Login" />
                <p class="signup">
                  Don't have an account ?
                  <a href="/signup" onClick={toggleForm}>
                    Sign Up.
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
