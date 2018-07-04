import React from "react";
import { connect } from "react-redux"
import { default as CreateAccountPresentor }  from "../../presentors/create-account"

const CreateAccount = function () {
  return (
    <CreateAccountPresentor /> 
  )
}

export default connect(
  state => {
    return {
      session: state.session
    }
  }
)(CreateAccount);
