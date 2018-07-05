import ProjectConstants from "../constant/project";
import { dispatch } from "../store/store"

export function init(projectObject) {
  dispatch({
    type: ProjectConstants.READ,
    payload: projectObject
  });
}

export function modify(project) {
  dispatch({ type: ProjectConstants.MODIFY, payload: project })
}

