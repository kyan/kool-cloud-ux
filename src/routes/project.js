import React from "react";
import { Component } from "react";
import { connect } from "react-redux"
import Card from '../component/card'
import HeaderBar from "../partials/header-bar"
import MastheadSmall from "../partials/masthead-small"
import changeLocation from "../signal/change-location"
class Project extends Component {

  findProject(projectid) {
    return this.props.projects.find((project) => {
      return project.id === projectid;
    });
  }

  render() {
    const project = this.findProject(this.props.match.params.id);
    const title = project ? project.title : 'No Film of this name' ;
    return (
        <div>
        <div className="page-header">
        <HeaderBar/>
        <MastheadSmall pageTitle={title} title={title}/>
        
        <div className="ui form container ">
          <a href='' onClick={ changeLocation(`#/project-settings/${this.props.match.params.id}`) } className="ui items add-user-link"><i className="edit icon"></i> Settings</a>
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
