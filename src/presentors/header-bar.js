import React from "react";

export default function HeaderBar ({signedin, signOut}) {
  const signedOutButton = (signedin) ?
    (<a href="#signout" onClick={signOut} className="primary-nav-link"><i className="sign out icon"></i></a>) 
    : null;

  return (
    <div className="page-header">
      <div className="ui container grid">
        <div className="ten wide column">
        <a href="/#"><img src="./css/themes/koolcapture/assets/images/logo.png" alt="" className="cloudlogo"/></a>
        </div>
        <div className="two wide column">
          <nav className="primary-nav">      
            <a href="#signin" className="primary-nav-link"><i className="user circle icon"></i></a>
            {signedOutButton}
          </nav>
        </div>
     
      </div>
    </div>
  )
}
