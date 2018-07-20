import React from "react";
import { connect } from "react-redux"
import { session } from "../../store/pipe/session"
import signIn from "../../action/session/sign-in" 
import { dispatch } from "../../store/store"
import SignIn from "../../view/session/signin"

const SigninConnector = function () {
  const signInClick = (formInfo) => {
    dispatch(signIn(formInfo));
  }
  
  return (
    <SignIn errors={ session.errors } signedin={ session.signedIn } signIn={ signInClick } /> 
  )
}

export default connect(
  state => {
    return {
      session: state.session
    }
  }
)(SigninConnector);
