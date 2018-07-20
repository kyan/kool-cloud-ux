import React from "react";
import FormInput from '../form/form-input'

class CreateAccount extends React.Component {
  submitAccount = (e) => {
    e.preventDefault();
    this.props.submitAccount({
      name: this.refs.name.value,
      email: this.refs.email.value,
      password1: this.refs.password1.value,
      password2: this.refs.password2.value,
    });
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
                  <FormInput ref='name' error={ errors && errors.name  }
                      label='User Name'
                      type='text'
                      icon='user'
                      validators={ [] }
                    />
                  <FormInput ref='email' error={ errors && errors.email  }
                      label='E-mail address'
                      type='text'
                      icon='tablet alternate'
                      validators={ [] }
                    />
                  <FormInput ref='password1' error={ errors && errors.password1  }
                      label='Password'
                      type='password'
                      icon='lock alternate'
                      validators={ [] }
                    />
                  <FormInput ref='password2' error={ errors && errors.password2  }
                      label='Confirm password'
                      type='password'
                      icon='lock alternate'
                      validators={ [] }
                    />
                  <button className="ui primary submit button" onClick={ this.submitAccount } >Create Account</button>
                </div>
                <div className="ui error message"></div>
              </form>
            </div>
          </div>
        </div>
    )
  }
}

export default CreateAccount