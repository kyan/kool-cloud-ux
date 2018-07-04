import React from "react";
import { Component } from "react";
import { connect } from "react-redux"
import MastheadSmall from "../../presentors/masthead-small"
import changeLocation from "../../signal/change-location"
import { session } from "../../pipes/session"
import readProject from "../../thunk/projects/read-project"
import { dispatch } from "../../store/store"

class ProjectShow extends Component {

  componentWillMount() {
    dispatch(readProject(this.props.projectid));
  }

  render() {
    const { project } = this.props;
    
    const title = (project) ? project.title : `loading ${this.props.projectid}`;

    const description = (project) ? project.description : '' ;

    const settingButton = (session.signedIn) ? (<a href='#/project' onClick={ changeLocation(`#/project/edit/${this.props.projectid}`) } className="ui items add-user-link"><i className="edit icon"></i> Settings</a>) : null;
    return (
      <div className="page-header">
        <MastheadSmall pageTitle={title} title={title}/>
        <div className="ui form container ">
          { settingButton }
          <h3>{title}</h3>
          <div>{description}</div>
          {/*
          <h3>Film shots</h3>
          <div className="ui grid stackable shots-grid">
            <div className="four column row">
              <div className="ui column">
                <Card/>
              </div>
              <div className="ui column">
                <Card/>
              </div>
              <div className="ui column">
                <Card/>
              </div>
              <div className="ui column">
                <Card/>
              </div>
              <div className="ui four column">
                <Card/>
              </div>
              <div className="ui four column">
                <Card/>
              </div>
              <div className="ui four column">
                <Card/>
              </div>
            </div>
          </div>
            */}
        </div>
      </div>
    );
  }
}

export default connect(
  state => {
  return {
    project: state.activeProject
  }
}, null)(ProjectShow);
