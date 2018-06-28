import React from "react";
import { connect } from "react-redux"
import { default as SignInPresentor }  from "../presentors/signin"
import { isLogged } from "../pipes/session"
import { signIn } from "../thunk/session" 
import store from "../store/store"

const Signin = function () {
  const signInClick = (e) => {
    
    store.dispatch(signIn({ user:'john'}));
  }

  return (
    <SignInPresentor signedin={ isLogged() } signIn={ signInClick } /> 
  )
}

export default connect(
  state => {
    return {
      session: state.session
    }
  }
)(Signin);
