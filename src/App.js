// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,
Route,
Switch } from "react-router-dom";

import Home from './homepage';
import SignUp from './register';
import SignIn from './login';
import ForgotPassword from './forgot-password';
import Update from './update-password';
import LongUrl from './longurl';
import ShortUrl from './shorturl';
function App() {
  return (
   <>
      <Router>
        <div className="container-fluid">
          <div className="row no-gutter">
            <div className="col-lg-md-sm-12">
            
      
      <Switch>
        <Route path="/" component={Home} exact={true}/>
        <Route path="/register" component={SignUp} exact={true}/>
        <Route path="/login" component={SignIn} exact={true}/>
        <Route path="/forgot-password" component={ForgotPassword} exact={true}/>
        <Route path="/update-password" component={Update} exact={true}/>
        <Route path="/longurl" component={LongUrl} exact={true}/>
        <Route path="/shorturl" component={ShortUrl} exact={true}/>
      </Switch>
            </div>
          </div>
        </div>
          
      </Router>
   </>
  );
}

export default App;
