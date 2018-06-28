import React from "react";
import { Component } from "react";
import { connect } from "react-redux"
import {default as HomeMaskHeadPresentor }  from "../presentors/home-masthead"
import { isLogged } from "../pipes/session"

class HomeMaskHead extends Component {
  render () {
  
    return (
     <HomeMaskHeadPresentor signedin={isLogged()} /> 
    )
  }
}

export default connect(
  state => {
    return {
      session : state.session
    }
  }
)(HomeMaskHead);
