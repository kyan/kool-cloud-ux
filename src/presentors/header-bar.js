import React from "react";

export default function HeaderBar ({signedin, user, signOut}) {
  const signedOutButton = (signedin) ?
    (<a tooltip="sign out" href="#signout" onClick={signOut} className="primary-nav-link"><i className="sign out icon" ></i></a>) 
    : null;

  const signedInButton = (!signedin) && (<a href="#signin" className="primary-nav-link"><i className="user circle icon"></i></a>);

  return (
    <div className="page-header">
      <div className="ui container grid">
        <div className="ten wide column">
        <a href="/#"><img src="./css/themes/koolcapture/assets/images/logo.png" alt="" className="cloudlogo"/></a>
        </div>
        <div className="six wide column">
          <nav className="primary-nav">    
            {signedInButton}
            
            {signedOutButton}
          </nav>
        </div>
       

      </div>
    </div>
  )
}
