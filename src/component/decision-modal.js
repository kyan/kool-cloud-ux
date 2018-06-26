import { Modal, Button } from 'semantic-ui-react'

export default function DecisionModal (props) {
  return (
    <Modal dimmer='blurring' open={acceptRequestModal} onClose={this.close}>
      <Modal.Header>Accept Request</Modal.Header>
      <Modal.Content image>
        <Modal.Description>
          <p>Do you wish to allow Chris to participate in this film ?</p>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color='black' onClick={ null }>
          Reject
        </Button>
        <Button
          positive
          icon='checkmark'
          labelPosition='right'
          content="Accept"
          onClick={ null}
        />
      </Modal.Actions>
    </Modal>
  )
}
