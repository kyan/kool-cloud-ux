import React from "react";
import { Component } from "react";
import { connect } from "react-redux"
import { Breadcrumb } from 'semantic-ui-react'
import Card from '../component/card'

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
          <div class="ui container grid">
            <div class="eight wide column">
              <img src="./css/themes/koolcapture/assets/images/logo.svg" alt=""/>
            </div>
            <div class="eight wide column">
              <nav class="primary-nav">
                <a href="#sign-out" class="primary-nav-link"><i class="user circle icon"></i></a>
                <a href="#sign-out" class="primary-nav-link"><i class="sign out icon"></i></a>
              </nav>
            </div>
          </div>
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
          <a href='' onClick={ (e) => { this.changeLocation(e, `#/project-settings/${this.props.match.params.id}`); } } class="ui items add-user-link"><i class="phabricator icon"></i> Settings</a>
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
