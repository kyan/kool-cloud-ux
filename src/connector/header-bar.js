import React from "react";
import { connect } from "react-redux"
import signOut from "../action/session/sign-out" 
import HeaderBar  from "../view/header-bar"
import { session } from "../store/pipe/session"

const HeaderBarConnector = function () {

  const signOutClick = (e) => {
    signOut();
    e.preventDefault(); 
  }

  return (
    <HeaderBar signedin={ session.signedIn } user={ session.userName } signOut={ signOutClick } /> 
  )
}

export default connect(
  state => {
    return {
      session: state.session
    }
  }
)(HeaderBarConnector);
