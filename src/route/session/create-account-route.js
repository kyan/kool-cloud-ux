import React from "react";
import { Component } from "react";
import CreateAccountConnector from "../../connector/session/create-account"

class CreateAccountRoute extends Component {
  render() {
    return (
      <CreateAccountConnector />
    );
  }
}

export default CreateAccountRoute
