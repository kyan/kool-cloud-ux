import React from "react";
import { connect } from "react-redux"
import CreateAccount from "../../view/session/create-account"

const CreateAccountConnector = function () {
  return (
    <CreateAccount /> 
  )
}

export default connect(
  state => {
    return {
      session: state.session
    }
  }
)(CreateAccountConnector);
