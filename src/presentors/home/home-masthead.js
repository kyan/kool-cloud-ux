import React from "react";
export default function HomeMasthead({signedin}) {

  const buttons = (signedin) ?
    (<a href="#/project/new"><button  className="ui primary button new-project-button">New project</button></a>) :
    (<div className="ui floating message">
      <div className="ui three column doubling stackable grid">
        <div className="column">
          <a href="#/signin"><i className="user circle icon"></i>Sign In</a>
        </div>
        <div className="column">
          <a href="#/create-account"><i className="arrow circle right icon"></i>Sign Up</a>
        </div>
      </div>  
    </div>);
  return (
    <header className="masthead ui">
    <div className="cloud"><img src="./css/themes/koolcapture/assets/images/mr_cloud.png" alt=""/></div>
    <div className="ui container fullwidth">
      <div className="ui grid">
        <div className="ten wide column">
          <div className="ui top attached tabular menu">
            <a className="item active" data-tab="all-project">All projects</a>
            {/*<a className="item" data-tab="my-projects">My projects</a> */}
          </div>
        </div>
        <div className="six wide column">
          {buttons}
        </div>
      </div>
    </div>
  </header>
  )
  
}
