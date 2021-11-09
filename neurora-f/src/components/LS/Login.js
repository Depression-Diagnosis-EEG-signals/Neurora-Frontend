import './Login.css';




function Login() {
  return (
    <div className="App">

      

      <section>
    <div class="container">
      <div class="user signinBx">
        <div class="imgBx"><img src="https://www.statnews.com/wp-content/uploads/2020/01/AdobeStock_215322148-645x645.jpg" alt="" /></div>
        <div class="formBx">
          <form action="" onsubmit="return false;">
            <h2>Sign In</h2>
            <input type="text" name="" placeholder="Username" />
            <input type="password" name="" placeholder="Password" />
            <input href="/home" type="submit" name="" value="Login" />
            <p class="signup">
              Don't have an account ?
              <a href="#" onclick="toggleForm();">Sign Up.</a>
            </p>
          </form>
        </div>
      </div>
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
              Already have an account ?
              <a href="#" onclick="toggleForm();">Sign in.</a>
            </p>
          </form>
        </div>
        <div class="imgBx"><img src="https://www.diagnosio.com/wp-content/uploads/2020/12/AI-bias.jpg" alt="" /></div>
      </div>
    </div>
  </section>
      
    </div>
  );
}



export default Login;
