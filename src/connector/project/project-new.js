import React from "react";
import { Component } from "react";
import { connect } from "react-redux"
import { modify } from "../../signal/init-project"
import createProject from "../../action/projects/create-project"
import ProjectConstants from '../../constant/project';
import ProjectEdit from "../../view/project/project-edit"

class ProjectNewConnector extends Component {

  onChange = (data) => {
    modify(data)
  }

  onSubmit = () => {
    createProject();
  }

  flashMessage(projectCreationState) {
    if (projectCreationState.type === ProjectConstants.CREATE_FAILED) {
      return projectCreationState.message
    }
  }

  render() {
    const { project, projectCreationState } = this.props;
    return (
      <ProjectEdit submitTitle='Create' pageTitle='New project' project={project} onSubmit={ this.onSubmit } onChange={ this.onChange } flash={ this.flashMessage(projectCreationState) } />
    );
  }
}

export default connect(
  state => {
  return {
    project: state.activeProject,
    projectCreationState: state.projectCreationState
  }
}, null)(ProjectNewConnector);
