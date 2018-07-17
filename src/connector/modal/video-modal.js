import React from "react";
import { Component } from "react";
import { connect } from "react-redux"
import { Modal, Card, Icon, Divider } from 'semantic-ui-react'
import ModalConstant from '../../constant/modal'
import { userWithID } from '../../store/pipe/users' 

class VideoModalConnector extends Component {

  render() {
    const { projectCreationState } = this.props;
    return (
      (projectCreationState.type === ModalConstant.OPEN_VIDEO_MODAL) && 
      <Modal dimmer={'blurring'} size={'mini'} open={true}  onClose={ projectCreationState.message.reject}>
        <Modal.Header>{projectCreationState.message.shot.title}</Modal.Header>
        <Modal.Content>
        <Card>
          <Card.Content >
            <video width="100%" height="100%" poster="http://koolcloud.pod.sh/exports/film/festirennes.jpg" controls  onClose={projectCreationState.message.reject}>
              <source src="http://koolcloud.pod.sh/exports/film/festirennes.mp4" type="video/mp4"/>
            </video>
            <Card.Header></Card.Header>
            <Divider/>
            <Card.Meta>
              <span className='date'><Icon name='user' />Created by { userWithID(projectCreationState.message.shot.userid) } John</span>
            </Card.Meta>
            <Card.Description>{projectCreationState.message.shot.description}</Card.Description>
          </Card.Content>
          <Card.Content extra>
          </Card.Content>
        </Card>    
        </Modal.Content>
      </Modal>
    );
  }
}

export default connect(
  state => {
  return {
    projectCreationState: state.projectCreationState
  }
}, null)(VideoModalConnector);
