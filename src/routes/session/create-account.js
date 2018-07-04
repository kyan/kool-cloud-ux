import React from "react";
import { Component } from "react";
import CreateAccountConnector from "../../connectors/session/create-account"


class CreateAccount extends Component {
  render() {
    return (
      <CreateAccountConnector />
    );
  }
}

export default CreateAccount
