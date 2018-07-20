import React from "react";
import { Component } from "react";
import { connect } from "react-redux"
import { Modal, Card, Icon, Divider } from 'semantic-ui-react'
import { userWithID } from '../../store/pipe/users' 

class VideoModalConnector extends Component {

  render() {
    const { videoModal } = this.props;
    
    return (
      videoModal.open && <Modal dimmer={ 'blurring' } size={ 'mini' } open={ videoModal.open }  onClose={ videoModal.reject }>
        <Modal.Header>{ videoModal.shot.title }</Modal.Header>
        <Modal.Content>
        <Card>
          <Card.Content >
            <video width="100%" height="100%" poster="http://koolcloud.pod.sh/exports/film/festirennes.jpg" controls  onClose={ videoModal.shot.reject}>
              <source src="http://koolcloud.pod.sh/exports/film/festirennes.mp4" type="video/mp4"/>
            </video>
            <Card.Header></Card.Header>
            <Divider/>
            <Card.Meta>
              <span className='date'><Icon name='user' />Created by { userWithID(videoModal.shot.userid) } John</span>
            </Card.Meta>
            <Card.Description>{ videoModal.shot.description}</Card.Description>
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
    videoModal: state.videoModal
  }
}, null)(VideoModalConnector);
