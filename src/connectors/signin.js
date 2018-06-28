import React from "react";
import { connect } from "react-redux"
import { default as SignInPresentor }  from "../presentors/signin"
import { isLogged } from "../pipes/session"

const Signin = function () {
  return (
    <SignInPresentor  signedin={isLogged()} /> 
  )
}

export default connect(
  state => {
    return {
      session: state.session
    }
  }
)(Signin);
