import React from "react";
import { Component } from "react";
import { connect } from "react-redux"
import { default as ProjectEditPresentor }  from "../../presentors/project-edit"
import { init } from "../../signal/project"
import { modify } from "../../signal/project"
import createProject from "../../thunk/projects/create-project"
import ProjectConstants from '../../constant/project';

class ProjectNew extends Component {

  componentWillMount() {
    init(
      { title: '',
        description: '',
        status: 'private'
      }
    )
  }

  onChange = (data) => {
    modify(data)
  }

  onSubmit = () => {
    createProject();
  }

  isLoading(projectCreationState) {
    return (projectCreationState.type === ProjectConstants.CREATING)
  }

  flashMessage(projectCreationState) {
    if (projectCreationState.type === ProjectConstants.CREATE_FAILED) {
      return projectCreationState.message
    }
  }

  render() {
    const { project, projectCreationState } = this.props;
    return (
      <ProjectEditPresentor title='New project' project= {project} onSubmit={ this.onSubmit } onChange={ this.onChange } loading={ this.isLoading(projectCreationState) } flash={ this.flashMessage(projectCreationState) } />
    );
  }
}

export default connect(
  state => {
  return {
    project: state.activeProject,
    projectCreationState: state.projectCreationState
  }
}, null)(ProjectNew);
