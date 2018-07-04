import React from "react";

class Signin extends React.Component {
  submitClick = () => {
    this.props.signIn({
      user: this.refs.email.value,
      password: this.refs.password.value,
    })
  }

  userInput(errors){
    const hasError = (errors) ? !!errors.user : false;
    const errorIcon = (hasError) ? ( <div className="floating ui red label"><i className="exclamation triangle icon"></i></div>) : null;
    const tooltip = (hasError) ? ( errors.user ) : null;
    
    return(
      <div className="field">
        <label>User or email</label>
        <div className="ui left icon input" data-tooltip={ tooltip } data-position="top center">
            { errorIcon }
            <i className="user icon inverted"></i>
          <input type="text" name="email" ref="email" />
        </div>
      </div>
    )
  }

  passwordInput(errors){
    const hasError = (errors) ? !!errors.password : false;
    const errorIcon = (hasError) ? (<div className="floating ui red label"><i className="exclamation triangle icon"></i></div>) : null;
    const tooltip = (hasError) ? ( errors.password ) : null;
    return(
      <div className="field">
        <label>Password</label>
        <div className="ui left icon input" data-tooltip={ tooltip } data-position="top center">
          { errorIcon }
          <i className="lock icon inverted"></i>
          <input type="password"  name="password" ref="password"/>
        </div>
      </div>
    )
  }

  render() {
    const { errors } = this.props;
    return (
      <div>
        <div className="page-header logged-out">
          <div className="ui container grid">
            <div className="eight wide column signin-cloudlogo">
            <a href="/#"><img src="./css/themes/koolcapture/assets/images/logo.png" alt=""/></a>
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

            <div className="ui large form">
              <div className="ui segment">
                <h3>Sign in { errors && (<a className="ui red tag label">{ errors.flash}</a>) }</h3>
                { this.userInput(errors) }
                { this.passwordInput(errors) }
                <div className="field">
                  <a href="#/signin" className="forgot-password-link">Forgot your password?</a>
                </div>
                <button onClick={ this.submitClick } className="ui primary submit button">Login</button>
              </div>
              <div className="ui error message"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Signin;
