import React from "react";
import { useState } from "react";
import "./SignUp.css";
export default function SignUp() {
  const [newobject, setnewobject] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    district: "",
    address: "",
    pincode: "",
    state: "",
  });
  function handlechange(e) {
    setnewobject({ ...newobject, [e.target.name]: e.target.value });
  }

  async function handlesubmit(e) {
    e.preventDefault();
    let f = false;

    for (let field in newobject) {
      if (!newobject[field]) {
        alert("plese fill all fields");
        f = true;
        break;
      }
    }
    if (f) {
      return;
    }
  }
  return (
    <section className="reg-page">
      <div className=" left-reg">
        <div className="content-reg">
          <h1 className="title-login">Laundry Service</h1>
          <p className="para-login">Doorstep Wash & Dryclean service</p>
          <div className="btn-sec">
            <p>Already Have An Account?</p>
            <a className="li" href={"/"}>
              <button className="reg-btn">SignIn</button>
            </a>
          </div>
        </div>
      </div>

      <div class="vll"></div>
      <div className="right-reg">
        <div className="form-login form-reg">
          <h3>REGISTER</h3>
          <form action="" onSubmit={handlesubmit}>
            <div className="division">
              <div className="">
                <div className="field reg-field">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    onChange={handlechange}
                    required
                  />
                  <div className="under-line"></div>
                </div>

                <div className="field reg-field">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="password"
                    name="email"
                    onChange={handlechange}
                  />
                  <div className="under-line"></div>
                </div>
                <div className="field reg-field">
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    onChange={handlechange}
                  />
                  <div className="under-line"></div>
                </div>

                <div className="field reg-field">
                  <label htmlFor="password">Password</label>
                  <input
                    id="password"
                    type={"password"}
                    name="password"
                    onChange={handlechange}
                  />
                  <div className="under-line"></div>
                </div>
              </div>

              <div className="">
                <div className="field reg-field">
                  <label htmlFor="state">State</label>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    onChange={handlechange}
                  />
                  <div className="under-line"></div>
                </div>
                <div className="field reg-field">
                  <label htmlFor="district">District</label>
                  <input
                    type="text"
                    id="district"
                    name="district"
                    onChange={handlechange}
                  />
                  <div className="under-line"></div>
                </div>

                <div className="field reg-field">
                  <label htmlFor="address">Address</label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    onChange={handlechange}
                  />
                  <div className="under-line"></div>
                </div>
                <div className="field reg-field">
                  <label htmlFor="pincode">Pincode</label>
                  <input
                    type="text"
                    id="pincode"
                    name="pincode"
                    onChange={handlechange}
                  />
                  <div className="under-line"></div>
                </div>
              </div>
            </div>
            <div className="checkbox">
              <input type="checkbox" name="checkbox" id="checkbox" required />
              <label htmlFor="checkbox">
                {" "}
                I agree to Terms & Condition receiving marketing and promotional
                materials{" "}
              </label>
            </div>

            <button className="btn-signin">Register</button>
          </form>
        </div>
      </div>
    </section>
  );
}
