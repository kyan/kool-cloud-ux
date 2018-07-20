import React from "react";
import { Component } from "react";
import { connect } from "react-redux"
import { Modal } from 'semantic-ui-react'

class BusyModalConnector extends Component {

  render() {
    const  { busyModal } = this.props;
    return (
      <Modal open={ busyModal.open } dimmer='inverted'>
      <Modal.Header></Modal.Header>
      <Modal.Content>
      <div className="ui segment">
        <div className="ui active inverted dimmer">
          <div className="ui small text loader">{ busyModal.message } </div>
        </div>
      </div>
      </Modal.Content>
    </Modal>  
    );
  }
}

export default connect(
  state => {
    return {
      busyModal: state.busyModal
    }
  }, null)(BusyModalConnector);
