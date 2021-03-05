import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from "./components/home.component";
import Nav from "./components/nav.component";
import Login from "./components/login.component";
import History from "./components/viewHistory";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Register from "./components/register.component";
import UserInfo from "./components/userinfo";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav/>

      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/userinfo" component={UserInfo} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/history" component={History} />
            <Route exact path="/userinfo" component={UserInfo} />
          </Switch>
        </div>
      </div>
     </div>
    </BrowserRouter>
   
  );
}

export default App;
