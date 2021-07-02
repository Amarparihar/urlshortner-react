import { useState } from "react";
import { Link } from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
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
            <h2>Forgot Password</h2>
            <p>To Reset Your password kindly go through below steps: </p>
            <div style={{ fontFamily: "serif", textAlign: "start" }}>
              <ul>
                <li>
                  
                  Step1 : Enter your registered Email Id and press Submit button
                </li>
                <li> Step2 : You will get mail for Reset your password</li>
                <li>
                  
                  Step3 : You will have one string after clicked that string you
                  will redirects to the other page where you can changed your
                  password
                </li>
              </ul>
            </div>
          </div>

          <div className="col-sm-md-lg-6">
            <form
              onSubmit={async(e) => {
                e.preventDefault();
                setEmail("");

                let response = await fetch("https://urlshortnerserver.herokuapp.com/forgot-password",{
                    method:'POST',
                    body:JSON.stringify({
                        email
                    }),
                    headers:{
                        "content-type":"application/json"
                    }
                })

                let data = await response.json();
                if(data.message==='string genrated'){
                    toast.info('Kindly Check Your Mail');
                }else{
                    toast.error('Insert valid email address');
                }
              }}
            >
              <div className="form-group mt-3">
                <label for="InputEmail" style={{ color: "white" }}>
                  Email address
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

              <button
                className="btn btn-info btn-block btn-login text-uppercase font-weight-bold mt-2 rounded"
                type="submit"
              >
                submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer/>
    </>
  );
}
