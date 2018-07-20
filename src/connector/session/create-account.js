import React from 'react';
import { connect } from 'react-redux'
import CreateAccount from '../../view/session/create-account'
import createAccountAction from '../../action/session/create-account'

const CreateAccountConnector = ({session}) => {
  console.log(session)
  return (
    <CreateAccount submitAccount={ createAccountAction } errors={ session.errors }/> 
  );
}

export default connect(
  state => {
    return {
      session: state.session
    }
  }
)(CreateAccountConnector);
