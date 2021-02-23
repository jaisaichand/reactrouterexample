import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route, HashRouter
} from "react-router-dom";
import { hashHistory } from 'react-router';
import './App.css';
import Signup from './Components/Signup';

import Home from './Components/Home';
import Login from './Components/Login';
import ForgotPassword from './Components/ForgotPassword';
import PostItem from './Components/PostItem';
// import 'bootstrap/dist/css/bootstrap.css'


class App extends React.Component {
  render() {
    return (
      <div className="App bg-black">


        <HashRouter>
          <Switch>
            <Route path="/" exact component={Home} ></Route>

            <Route path="/signup" component={Signup} ></Route>
            <Route path="/login" component={Login} ></Route>
            <Route path="/post/:id" component={PostItem} ></Route>
            <Route path="/forgotpassword" component={ForgotPassword} ></Route>

          </Switch>

        </HashRouter>
      </div>
    );
  }
}

export default App;
