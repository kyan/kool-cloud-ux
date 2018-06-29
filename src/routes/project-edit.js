import React from "react";
import { default as ProjectEditConnector } from '../connectors/project-edit'

export default function ProjectEdit(props) {
  
  return (
    <ProjectEditConnector productid={props.match.params.id} />
  );
}
