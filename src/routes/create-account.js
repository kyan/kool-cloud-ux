import React from "react";
import { Component } from "react";

class CreateAccount extends Component {
  render() {
    return (
      <div>
        <div className="page-header logged-out">
          <div className="ui container grid">
            <div className="eight wide column signin-cloudlogo">
              <img src="./css/themes/koolcapture/assets/images/logo.png" alt=""/>
            </div>
          </div>
        </div>
        <header className="masthead ui">
          <div className="cloud"></div>
          <div className="ui container">
          </div>
        </header>
        <div class="ui middle aligned center aligned grid login-container">
          <div class="column login-box register-box">
            <h2 class="ui teal image header">
              <div class="content">
                Create your account
              </div>
            </h2>
            <form class="ui large form">
              <div class="ui stacked segment">
                <div class="field">
                  <label>User Name</label>
                  <div class="ui left icon input">
                    <i class="user icon inverted"></i>
                    <input type="text" name="username"/>
                  </div>
                </div>
                <div class="field">
                  <label>E-mail address</label>
                  <div class="ui left icon input ">
                    <i class="mail icon inverted"></i>
                    <input type="text" name="email" />
                  </div>
                </div>
                <div class="field">
                  <label>Password</label>
                  <div class="ui left icon input ">
                    <i class="lock icon inverted"></i>
                    <input type="password" name="password" />
                  </div>
                </div>
                <div class="field">
                  <label>Confirm password</label>
                  <div class="ui left icon input">
                    <i class="lock icon inverted"></i>
                    <input type="password" name="confirm-pasword" />
                  </div>
                </div>
                <button class="ui primary submit button">Create Account</button>
              </div>
              <div class="ui error message"></div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateAccount
