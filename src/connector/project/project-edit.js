import React from "react";
import { Component } from "react";
import { connect } from "react-redux"
import { modify } from "../../signal/init-project"
import ProjectConstants from '../../constant/project';
import { default as ProjectEditPresentor }  from "../../view/project/project-edit"

import updateProject from "../../action/projects/update-project"

class ProjectEditConnector extends Component {

  onChange = (data) => {
    modify(data)
  }

  onSubmit = () => {
    updateProject();
  }

  flashMessage(projectCreationState) {
    if (projectCreationState.type === ProjectConstants.UPDATE_FAILED) {
      return projectCreationState.message
    }
  }

  render() {
    const { project, projectCreationState } = this.props;
    return (
      <ProjectEditPresentor submitTitle='Modify' pageTitle='Modify project' project= {project} onSubmit={ this.onSubmit } onChange={ this.onChange } flash={ this.flashMessage(projectCreationState) } />
    );
  }
}

export default connect(
  state => {
  return {
    project: state.activeProject,
    projectCreationState: state.projectCreationState
  }
}, null)(ProjectEditConnector);
