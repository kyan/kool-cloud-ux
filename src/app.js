import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Home from './routes/home'
import Project from './routes/project'
import ProjectEdit from './routes/project-edit'
import ProjectNew from './routes/project-new'
import Signin from './routes/signin'
import CreateAccount from './routes/create-account'
import NotFound from './routes/404'
import "./app.css"

const App = () => (
  <div>
    <Router>
      <Switch>
        <Route exact path="/" component={ Home }/>
        <Route path="/project/new" component={ ProjectNew } />
        <Route path="/project/show/:id" component={ Project } />
        <Route path="/project/edit/:id" component={ProjectEdit} />
        <Route path="/signin" component={Signin} />
        <Route path="/create-account" component={CreateAccount} />
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
