import { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function SignIn(){
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");

    const history = useHistory();
    return (
      <>
        <nav
          className="navbar navbar-expand-lg navbar-light sticky-top"
          id="mainNav"
        >
          <div className="container px-4 px-lg-5">
            <span
              style={{
                color: "black",
                fontFamily: "fantasy",
                fontSize: "30px",
              }}
            >
              URL Shortner
            </span>

            <div className="collapse navbar-collapse responsive">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link to="/" className="nav-link" style={{ color: "black" }}>
                    Back
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    to="/register"
                    className="nav-link"
                    
                    style={{ color: "black" }}
                  >
                    Sign Up
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <section class="signup-section">
          <div class="container px-4 px-lg-5">
            <div class="row gx-4 gx-lg-5">
              <div class="col-md-10 col-lg-8 mx-auto ">
                <form
                  onSubmit={async(e) => {
                    e.preventDefault();
                    setEmail("");
                    setPassword("");
                    let response = await fetch("https://urlshortnerserver.herokuapp.com/login",{
                        method:'POST',
                        body:JSON.stringify({
                            email,
                            password
                        }),
                        headers: {
                            "content-type": "application/json",
                          }
                    })

                    let data = await response.json();
                    if(data.message==='Login Successful'){
                        toast.success('Login Successful');
                        setTimeout(() => {
                            history.push('/longurl');
                        }, 5000);
                    }else if(data.message==='Invalid Creadentials'){
                        toast.error('Invalid Creadentials');
                    }else{
                        toast.warn('user not registered');
                    }
                    
                  }}
                >
                  <div className="form-group">
                    <label for="InputEmail">
                      Email address <span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="InputEmail"
                      aria-describedby="emailHelp"
                      placeholder="Enter email"
                      required
                      autoFocus
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label for="InputPassword">
                      Password<span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="InputPassword"
                      placeholder="Password"
                      required
                      minLength="4"
                      maxLength="8"
                      autoFocus
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>

                  <div className="mt-2 text-end">
                    <Link to="/forgot-password">
                      <span style={{ color: "white" }}>Forgot password?</span>
                    </Link>
                  </div>

                  <button
                    className="btn btn-primary btn-block btn-login text-uppercase font-weight-bold mt-2 rounded"
                    type="submit"
                  >
                    Sign In
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
        <ToastContainer/>
      </>
    );
}