import { useState } from "react";
import { Link, useHistory } from "react-router-dom";

export default function LongUrl() {
    const[longURL,setLongURL] = useState("");
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
                  to="/"
                  className="nav-link"
                  
                  style={{ color: "black" }}
                >
                  Sign Out
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
            <h2>SHORT URL</h2>
            <p>Paste the Long URL to be shortend</p>
            <div style={{ fontFamily: "serif", textAlign: "start" }}>
              URL Shortener is a free tool to shorten a URL or reduce a link Use
              our URL Shortener to create a shortened link making it easy to
              remember.
            </div>
          </div>

          <div className="col-sm-md-lg-6">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                console.log(longURL);
                setLongURL("");
                history.push("/shorturl");
                
              }}
            >
              <div className="form-group mt-3">
                <label for="URL">
                  Paste URL:
                </label>
                <input
                  type="url"
                  className="form-control"
                  id="URL"
                  aria-describedby="url"
                  placeholder="Paste URL"
                  required
                  autoFocus
                  value={longURL}
                  onChange={(e) => setLongURL(e.target.value)}
                />
              </div>

              <button
                className="btn btn-info btn-block btn-login text-uppercase font-weight-bold mt-2 rounded"
                type="submit"
              >
                Short Url
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
