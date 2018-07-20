import React from "react";
import FormInput from '../form/form-input'

class Signin extends React.Component {

  submitClick = () => {
    this.props.signIn({
      name: this.refs.name.value,
      password: this.refs.password.value,
    })
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
                <h3>Sign in { errors && (<a className="ui red tag label">{ errors.flash }</a>) }</h3>
                <FormInput ref='name' error={ errors && errors.name  }
                  label='User or email'
                  type='text'
                  icon='user'
                  validators={ [] }
                />
                <FormInput ref='password' error={ errors && errors.password }
                  label='Password'
                  type='password'
                  icon='lock'
                  validators={ [] }
                />
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
