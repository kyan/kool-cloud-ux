import React from "react";
import ProjectShow from '../connectors/project-show'
import HeaderBar from "../presentors/header-bar"

export default function Project (props) {

    return (
      <div>
        <div className="page-header">
          <HeaderBar/>
          <ProjectShow projectid={props.match.params.id}/>
        </div>
      </div>
    );
}
