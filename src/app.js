import React from "react";
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Home from './routes/home'
import Project from './routes/project'
import ProjectSettings from './routes/project-settings'
import Signin from './routes/signin'
import Signup from './routes/signup'

import NotFound from './routes/not-found'

const loggedIn = () => {
  return true;
}

const loginSwitch = () => (
  loggedIn() ? (
    <Home/>
  ) : (
    <Redirect to="/signin"/>
  )
)

const App = () => (
  <div>
    <Router>
      <Switch>
        <Route exact path="/" 
        render={ loginSwitch }/>
        <Route path="/project/:id" component={Project} />
        <Route path="/project-settings/:id" component={ProjectSettings} />
        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
    <footer class="page-footer">
      <div class="ui container">
        <p>© KoolCloud 2018</p>
      </div>
    </footer>
  </div>
);

export default App;
