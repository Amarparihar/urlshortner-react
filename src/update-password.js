import { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Update() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const history = useHistory();

  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light sticky-top"
        id="mainNav"
      >
        <div className="container px-4 px-lg-5">
          <span
            style={{ color: "black", fontFamily: "fantasy", fontSize: "30px" }}
          >
            URL Shortner
          </span>

          <div className="collapse navbar-collapse responsive">
            <ul className="navbar-nav ms-auto">

              <li className="nav-item">
                <Link
                  to="/login"
                  className="nav-link"
                  
                  style={{ color: "black" }}
                >
                  Back TO SignIn
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container justify-content-center" id="bgimg">
        <div className="row">
          <div
            className="col-sm-md-lg-6"
            style={{ textAlign: "center", fontFamily: "sans-serif" }}
          >
            <h2>Update Your Password Here</h2>
          </div>

          <div className="col-sm-md-lg-6">
            <form
              onSubmit={async(e) => {
                e.preventDefault();
                setEmail("");
                setPassword("");
                setConfirmPassword("");
                
                let response = await fetch("https://urlshortnerserver.herokuapp.com/update-password",{
                    method:'PUT',
                    body:JSON.stringify({
                        email,
                        password,
                        confirmPassword
                    }),
                    headers:{
                        "content-type":"application/json"
                    }
                })

                let data = await response.json();
                if(data.message==='Password Updated'){
                    toast.success('Password Updated')
                }else if(data.message==='Enter valid password'){
                    toast.error('Enter valid password')
                }else if(data.message==='Enter valid email'){
                    toast.warn('Enter valid email')
                }
               
              }}
            >
              <div className="form-group mt-3">
                <label for="InputEmail">
                  Email address<span style={{ color: "red" }}>*</span>
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
              <div className="form-group">
                <label for="confirmPassword">
                  Confirm Password<span style={{ color: "red" }}>*</span>
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="confirmPassword"
                  placeholder="Confirm Password"
                  required
                  minLength="4"
                  maxLength="8"
                  autoFocus
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>

              <button
                className="btn btn-info btn-block btn-login text-uppercase font-weight-bold mt-2 rounded"
                type="submit"
              >
                Update
              </button>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer/>
    </>
  );
}
