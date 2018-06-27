import React from "react";
export default function MastheadBig() {

  return (
    <header className="masthead ui">
    <div className="cloud"><img src="./css/themes/koolcapture/assets/images/mr_cloud.png" alt=""/></div>
    <div className="ui container fullwidth">
      {/* Start ui tab navigation */}
      <div className="ui top attached tabular menu">
        <a className="item active" data-tab="all-project">All projects</a>
        {/*<a className="item" data-tab="my-projects">My projects</a> */}
        <button  className="ui primary button new-project-button">New project</button>  
      </div>
      
    </div>
  </header>
  )
}
