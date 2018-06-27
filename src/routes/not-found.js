import React from "react";
import { Component } from "react";
import HeaderBar from "../partials/header-bar";

class NotFound extends Component {
  render() {
    return (
      <div class="page-header">
        <HeaderBar/>
        <header class="masthead small ui">
          <div class="ui container">
              <h1>404</h1>
          </div>
        </header>
        <div class="ui container">
          Sorry page this page does not exist. 
        </div>
      </div>
    );
  }
}

export default NotFound
