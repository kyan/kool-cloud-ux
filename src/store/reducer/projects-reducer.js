import ProjectConstants from "../../constant/project"
import SessionConstants from "../../constant/session"

export function projects(projects=[], action) {
  switch(action.type) {
    case ProjectConstants.CREATED:
      projects = [...projects, action.payload];
      break;
    case ProjectConstants.LISTED:
      projects = action.payload;
      break;
    case ProjectConstants.READ:
      projects =  projects.map((project)=>{
        if (project.id === action.payload.id) {
          
          return action.payload
        } else {
          return project
        }
      });
      break
    case SessionConstants.SIGNED_OUT:
      projects = [projects[0]];
      break;
    default:
  }
  return projects;
};

export function searchFilter (searchFilter='', action) {
  switch(action.type) {
    case ProjectConstants.SET_SEARCH_FILTER:
      searchFilter = action.payload;
      break;
    default:
  }
  return searchFilter;
};

export function projectCreationState (creationProjectState={}, action) {
  switch(action.type) {
    case ProjectConstants.CREATE_FAILED:
      creationProjectState = { type: action.type, message: action.payload };
      break;
    case ProjectConstants.CREATING:
      creationProjectState = { type: action.type, message: action.payload };
      break;
    case ProjectConstants.CREATED:
      creationProjectState = { type: action.type, message: action.payload };
      break;
    default:

  }
  return creationProjectState;
};

export function activeProject (activeProject={}, action) {
  
  switch(action.type) {
    case ProjectConstants.READ:
      activeProject = action.payload;
      break;
    case ProjectConstants.MODIFY:
      activeProject = { ...activeProject, ...action.payload };
      break;
    default:
  }

  return activeProject;
};
