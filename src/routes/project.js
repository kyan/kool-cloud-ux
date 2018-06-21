import React from "react";
import { Component } from "react";
import { connect } from "react-redux"
import { Breadcrumb } from 'semantic-ui-react'

class Project extends Component {

  findProject(projectid) {
    return this.props.projects.find((project) => {
      return project.id === projectid;
    });
  }

  render() {
    const project = this.findProject(this.props.match.params.id);
    const title = project ? project.title : 'No Film of this name' 
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <Breadcrumb>
          <Breadcrumb.Section href='#/'>Home</Breadcrumb.Section>
          <Breadcrumb.Divider />
          <Breadcrumb.Section >{title}</Breadcrumb.Section>
        </Breadcrumb>
        <h1 >Project : {title}</h1>
      </div>
    );
  }
}

export default connect(
  state => {
  return {
    users : state.users,
    projects : state.projects,
    searchFilter: state.searchFilter
  }
}, null)(Project);
