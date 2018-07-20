import React from "react";
import { Component } from "react";
import { connect } from "react-redux"
import MastheadSmall from "../../view/masthead-small"
import changeLocation from "../../signal/change-location"
import ShotList from "../../view/shot/shot-list"
import MemberList from "../../view/member/member-list"

class ProjectShowConnector extends Component {
  
  render() {
    const { project } = this.props;
    const title = (project) && project.title;
    const description = (project) && project.description ;
    const editButton = (project.rights && project.rights.canEditProject) ? (<a href='#/project' onClick={ changeLocation(`#/project/edit/${this.props.projectid}`) } className="ui items add-user-link"><i className="edit icon"></i> Edit Project</a>) : null;
    const canCreateShots= (project.rights && project.rights.canCreateShots) 

    return (
      <div className="page-header">
        <MastheadSmall pageTitle={title} title={title}/>
        <div className="ui form container ">
        { editButton }
          <h3>{title} </h3>
          <div>{description}</div>
          <MemberList members={ project.members } />
          <h3>Shots</h3>
          <ShotList shots={ project.shots } canCreateShots={canCreateShots} projectid={ project.id }/>
        </div>
          
      </div>
    );
  }
}

export default connect(
  state => {
  return {
    project: state.activeProject,
    projectCreationState: state.projectCreationState
  }
}, null)(ProjectShowConnector);
