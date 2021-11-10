import "./Signup.css";

function Signup() {
  return (
    <div className="App">
      <section>
        <div class="container active">
          <div class="user signupBx">
            <div class="formBx">
              <form action="" onsubmit="return false;">
                <h2>Create an account</h2>
                <input type="text" name="" placeholder="Username" />
                <input type="email" name="" placeholder="Email Address" />
                <input type="password" name="" placeholder="Create Password" />
                <input type="password" name="" placeholder="Confirm Password" />
                <input type="submit" name="" value="Sign Up" />
                <p class="signup">
                  Already have an account ?<a href="/login">Login.</a>
                </p>
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
}

export default Signup;
