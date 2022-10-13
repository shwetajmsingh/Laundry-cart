import React, { useState } from "react";
import "./SignIn.css";
const SignIn = () => {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);
  const loginUser = async (e) => {
    e.preventDefault();
  };
  const [show, setShow] = useState(false);

  return (
    <div className="app-sigin">
      <div className="app-sigin-section">
        <div className="sigin-left">
          <h2 className="header">
            Laundry <br></br>Service
          </h2>
          <h4>Doorstep Wash & Dryclean Service</h4>
          <p>Don't Have An Account?</p>
          <a href="/register">
            <button>Register</button>
          </a>
        </div>
        <form
          method="POST"
          action={login ? "/orders" : "/"}
          onSubmit={loginUser}
          className="app-userform"
        >
          <span>SIGN IN</span>

          <label htmlFor="mail">Mobile/Email</label>
          <input
            type="text"
            id="mail"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
          />

          <label htmlFor="password">Password</label>
          <input
            type={show ? "text" : "password"}
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span
            className="eye-icon"
            onClick={(e) => {
              setShow(!show);
            }}
          >
            {/* <Icon icon={show ? eye : eyeOff} size={20} /> */}
          </span>
          <a className="forgot" href="#">
            Forgot password?
          </a>
          <button type="submit" className="signin" onClick={loginUser}>
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};
export default SignIn;
