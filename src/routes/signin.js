import React from "react";
import { Component } from "react";

class Signin extends Component {
  render() {
    return (
      <div>
        <div className="page-header logged-out">
          <div className="ui container grid">
            <div className="eight wide column signin-cloudlogo">
              <img src="./css/themes/koolcapture/assets/images/logo.png" alt=""/>
            </div>
            <div className="eight wide column">
              <nav className="primary-nav">
                <a href="#create-account" className="primary-nav-link">Create an account<i className="arrow circle right icon"></i></a>
              </nav>
            </div>
          </div>
        </div>
        <header className="masthead ui">
          <div className="cloud"></div>
          <div className="ui container">
          </div>
        </header>
        <div className="ui center aligned grid login-container">
          <div className="column login-box">

            <form className="ui large form">
              <div className="ui segment">
                <h3>Sign in</h3>
                <div className="field">
                  <label>User or email</label>
                  <div class="ui left icon input">
                      <i class="user icon inverted"></i>
                    <input type="text" name="email"/>
                  </div>
                </div>

                <div className="field">
                  <label>Password</label>
                  <div className="ui left icon input">
                    <i class="lock icon inverted"></i>
                    <input type="password" name="password"/>
                  </div>
                </div>
                <div className="field">
                  <a href="#" className="forgot-password-link">Forgot your password?</a>
                </div>
                <button className="ui primary submit button">Login</button>
              </div>
              <div className="ui error message"></div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Signin
