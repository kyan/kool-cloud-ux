import React from "react";
import { Component } from "react";
import { connect } from "react-redux"
import { Breadcrumb, Dropdown, Modal, Header, Button } from 'semantic-ui-react'

class ProjectSettings extends Component {

  constructor() {
    super();
    this.state={ acceptRequestModal: false};
  }

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
    const title = project ? project.title : 'loading' ;

    const { acceptRequestModal } = this.state;
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
          </div>
          <form action="" class="ui form container grid">
            <div class="ui six wide column">
              <h3>Modify project</h3>
              
              <div class="field">
                <label>Project name</label>
                <input type="text" placeholder="Enter Text"/>
              </div>
              
              <div class="field">
                <label>Project description</label>
                <textarea placeholder="Enter Text"></textarea>
              </div>
              <div class="fields">
                <div class="field">
                    <Dropdown search selection value={1} options={
                        [
                          { key: 1, text: 'Unpublished', value: 1 },
                          { key: 2, text: 'Published', value: 2 }
                        ] } />
                </div>
                
              </div>
            </div>
            <div class="ui ten wide column">
              
              <div class="ui segment">
                <h4>Shared with</h4>
                <div class="ui grid stackable">
                  <div class="ui eight wide column">
                    <button class="ui icon tiny negative button"><i class="icon trash"></i></button>
                    <span class="user-label">User 2</span>
                  </div>
                  <div class="ui eight wide column aligned right">
                    <Dropdown placeholder='Role' value={4} search selection options={
                        [
                          { key: 1, text: 'Super', value: 1 },
                          { key: 2, text: 'Admin', value: 2 },
                          { key: 3, text: 'Animator', value: 3 },
                          { key: 4, text: 'Critic', value: 4 }
                        ] } />
                  </div>
                </div>
              </div>
              <div class="ui segment">
                <h4>User share request</h4>
                <div class="ui grid stackable">
                  <div class="ui twelve wide column">
                    <span>User 2</span>
                  </div>
                  <div class="ui two wide column aligned right">
                    <a href="" class="ui text-positive">Accept</a>
                  </div>
                  <div class="ui two wide column aligned right">
                    <a href="" class="ui text-negative">Reject</a>
                  </div>
                </div>
                <div class="ui grid stackable">
                  <div class="ui twelve wide column">
                    <span>John Barrie</span>
                  </div>
                  <div class="ui two wide column aligned right">
                    <a href="" class="ui text-positive">Accept</a>
                  </div>
                  <div class="ui two wide column aligned right">
                    <a href="" class="ui text-negative">Reject</a>
                  </div>
                </div>
              </div>
              <div class="ui segment">
                <h4>Your Connected Machine</h4>
                <div class="ui grid stackable">
                <div class="ui eight wide column">
                    <button class="ui icon tiny negative button" onClose={this.close}><i class="icon trash"></i></button>
                    <span class="user-label">Macbook Pro</span>
                  </div>
                </div>
              </div>
              <div class="ui field right aligned">
                <button class="ui submit primary button">Submit</button>
              </div>
            </div>
          </form>
          <Modal dimmer='blurring' open={acceptRequestModal} onClose={this.close}>
          <Modal.Header>Accept Request</Modal.Header>
          <Modal.Content image>
            
            <Modal.Description>
              <p>Do you wish to allow Chris to participate in this film ?</p>
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button color='black' onClick={this.close}>
              Reject
            </Button>
            <Button
              positive
              icon='checkmark'
              labelPosition='right'
              content="Accept"
              onClick={this.close}
            />
          </Modal.Actions>
        </Modal>
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
}, null)(ProjectSettings);
