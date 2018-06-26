import React from "react";
import { Component } from "react";

class Signin extends Component {
  render() {
    return (
      <div className="page-header logged-out">
        <div className="ui container grid">
          <div className="eight wide column">
            <img src="../dist/themes/koolcapture/assets/images/logo-white.svg" alt=""/>
          </div>
          <div className="eight wide column">
            <nav className="primary-nav">
              <a href="#create-account" className="primary-nav-link">Create an account<i className="arrow circle right icon"></i></a>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}

export default Signin
