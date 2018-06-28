import React from "react";
import { connect } from "react-redux"
import { signOutClick } from "../signal/session" 
import { default as HeaderBarPresentor }  from "../presentors/header-bar"
import { isLogged } from "../pipes/session"

const HeaderBar = function () {
  return (
    <HeaderBarPresentor signedin={ isLogged() } signOut={ signOutClick() } /> 
  )
}

export default connect(
  state => {
    return {
      session: state.session
    }
  }
)(HeaderBar);
