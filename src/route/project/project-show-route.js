import React from "react";
import { default as ProjectShowConnector } from '../../connector/project/project-show'
import HeaderBar from "../../connector/header-bar"
import readProject from "../../action/projects/read-project"
import { dispatch } from "../../store/store"


export default function ProjectShowRoute (props) {
    dispatch(readProject(props.match.params.id));  

    return (
      <div>
        <div className="page-header">
          <HeaderBar />
          <ProjectShowConnector projectid={props.match.params.id}/>
        </div>
      </div>
    );
}
