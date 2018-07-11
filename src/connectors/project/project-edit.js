import React from "react";
import { Component } from "react";
import { connect } from "react-redux"
import { modify } from "../../signal/project"
import ProjectConstants from '../../constant/project';
import { default as ProjectEditPresentor }  from "../../presentors/project/project-edit"

import updateProject from "../../thunk/projects/update-project"

class ProjectEdit extends Component {

  onChange = (data) => {
    modify(data)
  }

  onSubmit = () => {
    updateProject();
  }

  isLoading(projectCreationState) {
    return (projectCreationState.type === ProjectConstants.UPDATING) || (projectCreationState.type === ProjectConstants.READING)
  }

  flashMessage(projectCreationState) {
    if (projectCreationState.type === ProjectConstants.UPDATE_FAILED) {
      return projectCreationState.message
    }
  }

  render() {
    const { project, projectCreationState } = this.props;
    
    return (
      <ProjectEditPresentor submitTitle='Modify' pageTitle='Modify project' project= {project} onSubmit={ this.onSubmit } onChange={ this.onChange } loading={ this.isLoading(projectCreationState) } flash={ this.flashMessage(projectCreationState) } />
    );
  }
}

export default connect(
  state => {
  return {
    project: state.activeProject,
    projectCreationState: state.projectCreationState
  }
}, null)(ProjectEdit);
