import React from "react";
import { Component } from "react";
import { Container } from 'semantic-ui-react'
import ProjectsTable from "../component/projects-table"
import ProjectSearch from "../component/project-search"
import HeaderBar from "../component/header-bar"
class Home extends Component {
  
  render() {
    return (
      <div>
        <HeaderBar />
        <header className="masthead ui">
          <div className="cloud"><img src="./css/themes/koolcapture/assets/images/mr_cloud.png" alt=""/></div>
          <div className="ui container fullwidth">
            {/* Start ui tab navigation */}
            <div className="ui top attached tabular menu">
              <a className="item active" data-tab="all-project">All projects</a>
              {/*<a className="item" data-tab="my-projects">My projects</a> */}
              <button  className="ui primary button new-project-button">New project</button>  
            </div>
            
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
