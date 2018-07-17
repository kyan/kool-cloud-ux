import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import HomeRoute from './route/home-route'
import ProjectShowRoute from './route/project/project-show-route'
import ProjectEditRoute from './route/project/project-edit-route'
import ProjectNewRoute from './route/project/project-new-route'
import ShotEditRoute from './route/shot/shot-edit-route'
import SigninRoute from './route/session/signin-route'
import CreateAccountRoute from './route/session/create-account-route'
import NotFound from './route/404'
import "./app.css"

const App = () => (
  <div>
    <Router>
      <Switch>
        <Route exact path="/" component={ HomeRoute }/>
        <Route path="/project/new" component={ ProjectNewRoute } />
        <Route path="/project/show/:id" component={ ProjectShowRoute } />
        <Route path="/project/edit/:id" component={ProjectEditRoute} />
        <Route path="/shot/edit/:id" component={ShotEditRoute} />
        <Route path="/signin" component={SigninRoute} />
        <Route path="/create-account" component={ CreateAccountRoute } />
        <Route path="*" component={ NotFound } />
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
