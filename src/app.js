import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from './component/private-route'
import Home from './routes/home'
import Project from './routes/project'
import ProjectSettings from './routes/project-settings'
import Signin from './routes/signin'
import Signup from './routes/signup'
import CreateAccount from './routes/create-account'
import NotFound from './routes/not-found'
import "./app.css"

const App = () => (
  <div>
    <Router>
      <Switch>
        <Route exact path="/" component={ Home }/>
        <Route path="/project/:id" component={Project} />
        <PrivateRoute path="/project-settings/:id" component={ProjectSettings} />
        <Route path="/signin" component={Signin} />
        <Route path="/create-account" component={CreateAccount} />
        <Route path="/signup" component={Signup} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
    <footer className="page-footer">
      <div className="ui container">
        <p>© KoolCloud 2018</p>
      </div>
    </footer>
  </div>
);

export default App;
