import React from "react";

export default function CreateAccount() {

  return (
    <div>
        <div className="page-header logged-out">
          <div className="ui container grid">
            <div className="eight wide column signin-cloudlogo">
              <a href="/#"><img src="./css/themes/koolcapture/assets/images/logo.png" alt=""/></a>
            </div>
          </div>
        </div>
        <header className="masthead ui">
          <div className="cloud"></div>
          <div className="ui container">
          </div>
        </header>
        <div className="ui middle aligned center aligned grid login-container">
          <div className="column login-box register-box">
            <h2 className="ui teal image header">
              <div className="content">
                Create your account
              </div>
            </h2>
            <form className="ui large form">
              <div className="ui stacked segment">
                <div className="field">
                  <label>User Name</label>
                  <div className="ui left icon input">
                    <i className="user icon inverted"></i>
                    <input type="text" name="username"/>
                  </div>
                </div>
                <div className="field">
                  
                  <label>E-mail address</label>
                  <div className="ui left icon input ">
                    <i className="mail icon inverted"></i>
                    <input type="text" name="email" />
                  </div>
                </div>
                <div className="field">
                  <label>Password</label>
                  <div className="ui left icon input ">
                    <i className="lock icon inverted"></i>
                    <input type="password" name="password" />
                  </div>
                </div>
                <div className="field">
                  <label>Confirm password</label>
                  <div className="ui left icon input">
                    <i className="lock icon inverted"></i>
                    <input type="password" name="confirm-pasword" />
                  </div>
                </div>
                <button className="ui primary submit button">Create Account</button>
              </div>
              <div className="ui error message"></div>
            </form>
          </div>
        </div>
      </div>
  )


}