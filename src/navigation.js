import { Link } from "react-router-dom";
export default function Nav() {
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
              <li>
                <Link
                  to="/register"
                  className="nav-link"
                  style={{ color: "black" }}
                >
                  Sign Up
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
    </>
  );
}
