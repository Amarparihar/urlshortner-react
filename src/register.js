import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState();

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
                <Link to="/" className="nav-link" style={{ color: "black" }}>
                  Back
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/login"
                  className="nav-link"
                  style={{ color: "black" }}
                >
                  Sign In
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
                onSubmit={async (e) => {
                  e.preventDefault();
                  setFirstName("");
                  setLastName("");
                  setEmail("");
                  setPassword("");

                  let response = await fetch(
                    "https://urlshortnerserver.herokuapp.com/register",
                    {
                      method: "POST",
                      body: JSON.stringify({
                        firstName,
                        lastName,
                        email,
                        password,
                      }),
                      headers: {
                        "content-type": "application/json",
                      },
                    }
                  );

                  let data = await response.json();
                  if (data.message === "user registered successfully") {
                    toast.success("user registered successfully");
                    setTimeout(() => {
                      history.push("/login");
                    }, 5000);
                  } else {
                    toast.error("user already registered");
                  }
                }}
              >
                <div className="form-group">
                  <label for="FirstName">
                    First Name <span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    type="firstName"
                    className="form-control"
                    id="FirstName"
                    aria-describedby="firstName"
                    placeholder="First Name"
                    required
                    autoFocus
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label for="LastName">
                    LastName<span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    type="lastName"
                    className="form-control"
                    id="LastName"
                    aria-describedby="lastname"
                    placeholder="Last Name"
                    required
                    autoFocus
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
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

                <button
                  className="btn btn-primary btn-block btn-login text-uppercase font-weight-bold mt-2 rounded"
                  type="submit"
                >
                  Sign Up
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer />
    </>
  );
}
