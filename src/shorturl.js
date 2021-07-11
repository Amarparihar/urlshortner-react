import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ShortUrl(props) {
  const [shortURL, setShortURL] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const url = await fetch(
        `https://urlshortnerserver.herokuapp.com/shorturl/${props.match.params.id}`,{method:'GET'}
      );
      let urlData = await url.json();

      setShortURL([...urlData]);
    }
    fetchData();
  }, []);

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
                  to={`/longurl/${props.match.params.id}`}
                  className="nav-link"
                  style={{ color: "black" }}
                >
                  Back
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/"
                  className="nav-link"
                  style={{ color: "black" }}
                  onClick={() => {
                    window.localStorage.removeItem("Token");
                  }}
                >
                  Sign Out
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container-fluid justify-content-center" id="bgimg">
        <div className="row">
          <div
            className="col-sm-md-lg-12"
            style={{
              textAlign: "center",
              fontFamily: "sans-serif",
              padding: "20px",
            }}
          >
            <h2>SHORTENED URL</h2>
            <p>Your Shortened URL's ...!</p>
            <div style={{ fontFamily: "serif", textAlign: "start" }}>
              URL Shortener is a free tool to shorten a URL or reduce a link Use
              our URL Shortener to create a shortened link making it easy to
              remember
            </div>
          </div>
        </div>

        {shortURL.map((data) => {
          return (
            <>
              <div className="row">
                <div
                  className="col-sm-md-lg-6 mt-5 overflow-auto"
                  style={{
                    textAlign: "center",
                    border: "2px solid #16899d",
                    borderCollapse: "collapse",
                    width: "50%",
                    height: "80px",
                    marginBottom: "3px",
                    paddingTop: "2px",
                  }}
                >
                  <div>
                    <h3>This is your shortened URL</h3>

                    <a href={`${data.longURL}`} targrt="_blank">
                      http://localhost:5000/${data.shortURL}
                    </a>
                  </div>
                </div>
                <div
                  className="col-sm-md-lg-6 mt-5  overflow-auto"
                  style={{
                    textAlign: "center",
                    border: "2px solid #16899d",
                    width: "50%",

                    marginBottom: "3px",
                    paddingTop: "2px",
                  }}
                >
                  <h3>This is your pasted URL</h3>
                  <p style={{ color: "seagreen" }}>{data.longURL}</p>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
