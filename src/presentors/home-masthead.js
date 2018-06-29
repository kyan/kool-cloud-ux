import React from "react";
export default function HomeMasthead({signedin}) {

  const buttons = (signedin) ?
    (<a href="#/project/new"><button  className="ui primary button new-project-button">New project</button></a>) :
    (<div className="ui floating message">
      <a href="#/signin"><i className="user circle icon"></i>Sign In</a> <a href="#/signup"><i className="arrow circle right icon"></i>New to us? Sign Up</a>
    </div>);
  return (
    <header className="masthead ui">
    <div className="cloud"><img src="./css/themes/koolcapture/assets/images/mr_cloud.png" alt=""/></div>
    <div className="ui container fullwidth">
      <div className="ui grid">
        <div className="twelve wide column">
          <div className="ui top attached tabular menu">
            <a className="item active" data-tab="all-project">All projects</a>
            {/*<a className="item" data-tab="my-projects">My projects</a> */}
          </div>
        </div>
        <div className="four wide column">
          {buttons}
        </div>
      </div>
    </div>
  </header>
  )
  
}
