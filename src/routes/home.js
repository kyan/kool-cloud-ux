import React from "react";
import { Component } from "react";
import ProjectsTable from "../component/projects-table"
import ProjectSearch from "../component/project-search"
import { Container } from 'semantic-ui-react'

class Home extends Component {

  render() {
    return (
      <div>
        <div className="page-header">
          <div className="ui container grid">
            <div className="eight wide column">
              <img src="./css/themes/koolcapture/assets/images/logo.svg" alt=""/>
            </div>
            <div className="eight wide column">
              <nav className="primary-nav">
                <a href="#sign-out" className="primary-nav-link"><i className="user circle icon"></i></a>
                <a href="#sign-out" className="primary-nav-link"><i className="sign out icon"></i></a>
              </nav>
            </div>
          </div>
        </div>
        <header className="masthead ui">
          <div className="cloud"></div>
          <div className="ui container">
            {/* Start ui tab navigation */}
            <div className="ui top attached tabular menu">
              <a className="item active" data-tab="all-project">All project</a>
              <a className="item" data-tab="my-projects">My projects</a>
              {/* Start ui button */}
              <button className="ui primary button new-project-button">New project</button>
              {/* End ui button */}
            </div>
            {/* Start ui tab navigation */}
          </div>
        </header>
        <Container>
          <ProjectSearch/>
          <ProjectsTable/>
        </Container>
      </div>
    );
  }

}

export default Home
