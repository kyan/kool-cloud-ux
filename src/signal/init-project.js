import ProjectConstants from "../constant/project";
import { dispatch } from "../store/store"
import { session }  from "../store/pipe/session"

export function init() {
  
  const projectObject = { 
      title: '',
      description: '',
      status: 'private',
      members: []
  }
  if (session.userId) {
    projectObject.members.push({
      userid: session.userId,
      username: session.userName,
      role: 'owner'
    });
  }

  dispatch({
    type: ProjectConstants.READ,
    payload: projectObject
  });
}

export function modify(project) {
  dispatch({ type: ProjectConstants.MODIFY, payload: project })
}

