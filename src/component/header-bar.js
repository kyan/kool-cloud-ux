import React from "react";

export default function HeaderBar (props) {
  return (
    <div className="page-header">
      <div className="ui container grid">
        <div className="eight wide column">
          <img src="./css/themes/koolcapture/assets/images/logo.png" alt="" className="cloudlogo"/>
        </div>
        <div className="eight wide column">
          <nav className="primary-nav">
            <a href="#sign-out" className="primary-nav-link"><i className="user circle icon"></i></a>
            <a href="#sign-out" className="primary-nav-link"><i className="sign out icon"></i></a>
          </nav>
        </div>
      </div>
    </div>
  )
}