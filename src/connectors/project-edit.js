import React from "react";
import { Component } from "react";
import { connect } from "react-redux"
import { Dropdown, Modal, Button } from 'semantic-ui-react'
import HeaderBar from "../connectors/header-bar"
import MastheadSmall from "../presentors/masthead-small"

class ProjectEdit extends Component {

  constructor() {
    super();
    this.state={ acceptRequestModal: false};
  }

  findProject(projectid) {
    return this.props.projects.find((project) => {
      return project.id === projectid;
    });
  }

  render() {
    const project = this.findProject(this.props.productid);
    const title = project ? project.title : 'loading' ;

    const { acceptRequestModal } = this.state;
    return (
        <div>
          <div className="page-header">
            <HeaderBar />
            <MastheadSmall pageTitle={title} title={title}/>
          </div>
          <form action="" className="ui form container grid">
            <div className="ui six wide column">
              <h3>Modify project</h3>
              
              <div className="field">
                <label>Project name</label>
                <input type="text" placeholder="Enter Text"/>
              </div>

              <div className="fields">
                <div className="field">
                    <Dropdown search selection value={1} options={
                        [
                          { key: 1, text: 'Unpublished', value: 1 },
                          { key: 2, text: 'Published', value: 2 }
                        ] } />
                </div>
              </div>

              <div className="field">
                <label>Project description</label>
                <textarea placeholder="Enter Text"></textarea>
              </div>
              
            </div>
            <div className="ui ten wide column">
              <div className="ui segment">
                <h4>Shared with</h4>
                <div className="ui grid stackable">
                  <div className="ui eight wide column">
                    <button className="ui icon tiny negative button"><i className="icon trash"></i></button>
                    <span className="user-label">User 2</span>
                  </div>
                  <div className="ui eight wide column aligned right">
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
              <div className="ui segment">
                <h4>User share request</h4>
                <div className="ui grid stackable">
                  <div className="ui twelve wide column">
                    <span>User 2</span>
                  </div>
                  <div className="ui two wide column aligned right">
                    <a href="" className="ui text-positive">Accept</a>
                  </div>
                  <div className="ui two wide column aligned right">
                    <a href="" className="ui text-negative">Reject</a>
                  </div>
                </div>
                <div className="ui grid stackable">
                  <div className="ui twelve wide column">
                    <span>John Barrie</span>
                  </div>
                  <div className="ui two wide column aligned right">
                    <a href="" className="ui text-positive">Accept</a>
                  </div>
                  <div className="ui two wide column aligned right">
                    <a href="" className="ui text-negative">Reject</a>
                  </div>
                </div>
              </div>
              <div className="ui segment">
                <h4>Your Connected Machine</h4>
                <div className="ui grid stackable">
                <div className="ui eight wide column">
                    <button className="ui icon tiny negative button" onClose={this.close}><i className="icon trash"></i></button>
                    <span className="user-label">Macbook Pro</span>
                  </div>
                </div>
              </div>
              <div className="ui field right aligned">
                <button className="ui submit primary button">Submit</button>
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
}, null)(ProjectEdit);
