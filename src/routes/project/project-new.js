import React from "react";
import { default as ProjectNewConnector } from '../../connectors/project/project-new'
import { init } from "../../signal/project"
export default function ProjectNew() {
  init(
    { title: '',
      description: '',
      status: 'private'
    }
  )

  return (
    <ProjectNewConnector />
  );
}
