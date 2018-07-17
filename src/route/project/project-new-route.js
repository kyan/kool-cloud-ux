import React from "react";
import { default as ProjectNewConnector } from '../../connector/project/project-new'
import { init } from "../../signal/init-project"
export default function ProjectNewRoute() {
  init()

  return (
    <ProjectNewConnector />
  );
}
