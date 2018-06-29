import React from "react";
import { connect } from "react-redux"
import { default as SignInPresentor }  from "../presentors/signin"
import { session } from "../pipes/session"
import { signIn } from "../thunk/session" 
import { dispatch } from "../store/store"

const Signin = function () {
  const signInClick = (formInfo) => {
    dispatch(signIn(formInfo));
  }

  return (
    <SignInPresentor errors={ session.errors } signedin={ session.signedIn } signIn={ signInClick } /> 
  )
}

export default connect(
  state => {
    return {
      session: state.session
    }
  }
)(Signin);
