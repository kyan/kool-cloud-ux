import React from "react";
import DecisionModal from '../../connector/modal/decision-modal'
import { default as ProjectEditConnector } from '../../connector/project/project-edit'
import readProject from "../../action/projects/read-project"
import { dispatch } from "../../store/store"

export default function ProjectEditRoute(props) {
  dispatch(readProject(props.match.params.id));  
  return (
    <div>
      <ProjectEditConnector projectid={props.match.params.id} />
      <DecisionModal />
    </div>
  );
}
