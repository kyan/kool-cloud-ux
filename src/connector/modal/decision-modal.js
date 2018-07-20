import React from "react";
import { Component } from "react";
import { connect } from "react-redux"
import { Modal, Button } from 'semantic-ui-react'

class DecisionModalConnector extends Component {

  render() {
    const  { decisionModal } = this.props;
    
    return (
      decisionModal.open && 
        <Modal dimmer={'blurring'} size={'mini'} open={true} onClose={decisionModal.reject}>
          <Modal.Header>{ decisionModal.title }</Modal.Header>
          <Modal.Content>
            <p>{ decisionModal.message }</p>
          </Modal.Content>
          <Modal.Actions>
            <Button negative onClick={ decisionModal.reject }>Cancel</Button>
            <Button positive onClick={ decisionModal.accept } >Remove</Button>
          </Modal.Actions>
        </Modal>
    );
  }
}

export default connect(
  state => {
  return {
    decisionModal: state.decisionModal
  }
}, null)(DecisionModalConnector);
