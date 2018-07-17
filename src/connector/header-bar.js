import React from "react";
import { connect } from "react-redux"
import signOutClick from "../action/session/signout" 
import HeaderBar  from "../view/header-bar"
import { session } from "../store/pipe/session"

const HeaderBarConnector = function () {
  return (
    <HeaderBar signedin={ session.signedIn } user={ session.userName } signOut={ signOutClick() } /> 
  )
}

export default connect(
  state => {
    return {
      session: state.session
    }
  }
)(HeaderBarConnector);
