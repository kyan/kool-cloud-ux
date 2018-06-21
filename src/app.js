import React from "react";
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { Container } from 'semantic-ui-react'
import FadeIn from 'react-fade-in';
import Home from './routes/home'
import Project from './routes/project'
import Signin from './routes/signin'
import Signup from './routes/signup'

import NotFound from './routes/not-found'

const loggedIn = () => {
  return true;
}

const loginSwitch = () => (
  loggedIn() ? (
    <FadeIn transitionDuration='500'>
      <Home/>
    </FadeIn>
  ) : (
    <Redirect to="/signin"/>
  )
)

const App = () => (
  <Container>
    <Router>
      <Switch>
        <Route exact path="/" 
        render={ loginSwitch }/>
        <Route path="/project/:id" component={Project} />
        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  </Container>
);

export default App;
