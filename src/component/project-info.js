import React from "react";
import { connect } from "react-redux"
import { Component } from "react";
import {  Loader,    } from 'semantic-ui-react'

const state = state => {
  return {
    users: state.users
  }
};

class ProjectInfo extends Component {
  render () {
    return (
      <Loader >Loading</Loader>
    )
  }
}

export default connect(state, null)(ProjectInfo);