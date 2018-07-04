import ProjectConstants from "../../constant/project"
import SessionConstants from "../../constant/session"

export function projects(projects=[], action) {
  switch(action.type) {
    case ProjectConstants.LISTED:
      projects = action.payload;
      break;
    case ProjectConstants.CREATED:
      projects = [...projects, action.payload];
      break;
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

export function activeProject (activeProject='', action) {
  switch(action.type) {
    case ProjectConstants.READ:
      activeProject = action.payload;
      break;
    default:
  }
  return activeProject;
};
