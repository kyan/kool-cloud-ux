import React from "react";
import { Component } from "react";
import { connect } from "react-redux"
import Card from '../presentors/card'
import MastheadSmall from "../presentors/masthead-small"
import changeLocation from "../signal/change-location"
class ProjectShow extends Component {

  findProject(projectid) {
    return this.props.projects.find((project) => {
      return project.id === projectid;
    });
  }

  render() {
    const project = this.findProject(this.props.projectid);
    const title = project ? project.title : 'No Film of this name' ;
    return (
      <div className="page-header">
        <MastheadSmall pageTitle={title} title={title}/>
        <div className="ui form container ">
          <a href='#/project-settings' onClick={ changeLocation(`#/project-settings/${this.props.projectid}`) } className="ui items add-user-link"><i className="edit icon"></i> Settings</a>
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
        </div>
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
}, null)(ProjectShow);
