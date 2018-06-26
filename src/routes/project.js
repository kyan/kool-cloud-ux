import React from "react";
import { Component } from "react";
import { connect } from "react-redux"
import { Breadcrumb } from 'semantic-ui-react'
import Card from '../component/card'
import HeaderBar from "../component/header-bar"
class Project extends Component {

  findProject(projectid) {
    return this.props.projects.find((project) => {
      return project.id === projectid;
    });
  }

  changeLocation(e, location) {
    e.preventDefault();
    window.location = location;
  }

  render() {
    const project = this.findProject(this.props.match.params.id);
    const title = project ? project.title : 'No Film of this name' ;
    return (
        <div>
        <div class="page-header">
        <HeaderBar/>
        <header class="masthead small ui">
          <div class="ui container">
            <div class="ui container">
                <Breadcrumb>
                  <Breadcrumb.Section onClick={ (e) => {  this.changeLocation(e, `#/`) } } >Home</Breadcrumb.Section>
                  <Breadcrumb.Divider />
                  <Breadcrumb.Section >{title}</Breadcrumb.Section>
                </Breadcrumb>
            </div>
          </div>
        </header>
        
        <div class="ui form container ">
          <a href='' onClick={ (e) => { this.changeLocation(e, `#/project-settings/${this.props.match.params.id}`); } } class="ui items add-user-link"><i class="edit icon"></i> Settings</a>
          <h3>Film shots</h3>
          <div class="ui grid stackable shots-grid">
            <div class="four column row">
              <div class="ui column">
                <Card/>
              </div>
              <div class="ui column">
                <Card/>
              </div>
              <div class="ui column">
                <Card/>
              </div>
              <div class="ui column">
                <Card/>
              </div>
              <div class="ui four column">
                <Card/>
              </div>
              <div class="ui four column">
                <Card/>
              </div>
              <div class="ui four column">
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
