import React from "react";
import { Component } from "react";
import { connect } from "react-redux"
import { Modal, Button } from 'semantic-ui-react'
import ModalConstant from '../../constant/modal'

class DecisionModalConnector extends Component {

  render() {
    const  { projectCreationState } = this.props;

    return (
      (projectCreationState.type === ModalConstant.OPEN_DECISION_MODAL) && 
      
      <Modal dimmer={'blurring'} size={'mini'} open={true} onClose={projectCreationState.message.reject}>
        
        <Modal.Header>Remove user</Modal.Header>
        <Modal.Content>
          <p>Are you sure you want to remove this user </p>
        </Modal.Content>
        <Modal.Actions>
          <Button negative onClick={projectCreationState.message.reject}>Cancel</Button>
          <Button positive onClick={projectCreationState.message.accept} >Remove</Button>
        </Modal.Actions>
      </Modal>
      
    );
  }
}

export default connect(
  state => {
  return {
    projectCreationState: state.projectCreationState
  }
}, null)(DecisionModalConnector);
