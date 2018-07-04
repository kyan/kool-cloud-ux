import ProjectConstants from "../constant/project";
import { dispatch } from "../store/store"

export default function initNewProject(projectObject) {
  dispatch({
    type: ProjectConstants.READ,
    payload: projectObject
  });
}
