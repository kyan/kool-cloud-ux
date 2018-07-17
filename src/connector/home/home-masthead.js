import React from "react";
import { Component } from "react";
import { connect } from "react-redux"
import HomeMaskHead from "../../view/home/home-masthead"
import { session } from "../../store/pipe/session"

class HomeMaskHeadConnector extends Component {
  render () {
    return (
     <HomeMaskHead signedin={ session.signedIn } /> 
    )
  }
}

export default connect(
  state => {
    return {
      session : state.session
    }
  }
)(HomeMaskHeadConnector);
