import React from "react";
import { default as ProjectEditConnector } from '../../connectors/project/project-edit'
import readProject from "../../thunk/projects/read-project"
import { dispatch } from "../../store/store"

export default function ProjectEdit(props) {
  dispatch(readProject(props.match.params.id));  
  return (
    <ProjectEditConnector projectid={props.match.params.id} />
  );
}
