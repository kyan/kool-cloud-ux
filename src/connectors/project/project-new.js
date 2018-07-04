import React from "react";
import { Component } from "react";
import { connect } from "react-redux"
import { default as ProjectEditPresentor }  from "../../presentors/project-edit"
import initNewProject from "../../signal/init-new-project"

class ProjectNew extends Component {

  componentWillMount() {
    initNewProject(
      { title: 'asdf',
        description: 'asdf',
        status: 'private'
      })
  }

  submit = (data) => {
    console.log("on change follower",  data.value);
  }
  
  render() {

    const { project } = this.props;
    return (
      <ProjectEditPresentor title='New project' project= {project} submit={ this.submit } />
    );
  }
}

export default connect(
  state => {
  return {
    project: state.activeProject
  }
}, null)(ProjectNew);
