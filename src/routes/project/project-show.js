import React from "react";
import { default as ProjectShowConnector } from '../../connectors/project/project-show'
import HeaderBar from "../../connectors/header-bar"
import readProject from "../../thunk/projects/read-project"
import { dispatch } from "../../store/store"
import VideoModal from "../../connectors/modal/video-modal"

export default function ProjectShow (props) {
    dispatch(readProject(props.match.params.id));  

    return (
      <div>
        <div className="page-header">
          <HeaderBar />
          <ProjectShowConnector projectid={props.match.params.id}/>
          <VideoModal />
        </div>
      </div>
    );
}
