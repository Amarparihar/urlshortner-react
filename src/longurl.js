import { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function LongUrl(props) {


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
                  onClick={()=>{window.localStorage.removeItem('Token')}}
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
              onSubmit={async(e) => {
                e.preventDefault();
                setLongURL("");

                let response = await fetch(`http://localhost:5000/longurl/${props.match.params.id}`,{
                    method:'POST',
                    body:JSON.stringify({
                        longURL,
                        email:props.match.params.id
                    }),
                    headers:{
                        authorization:window.localStorage.getItem('myToken') ,
                        "content-type":"application/json"
                    }
                })

                let data = await response.json();
                if(data.message==='Url shorted'){

                     history.push(`/shorturl/${props.match.params.id}`);
                    
                }else if(data.message==='Invalid ID'){
                    toast.error('Invalid ID');
                    setTimeout(() => {
                        history.push('/login');
                    }, 5000);
                }
                
                
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
      <ToastContainer/>
    </>
  );
}
