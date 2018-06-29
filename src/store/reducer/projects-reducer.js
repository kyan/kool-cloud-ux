import ProjectConstants from "../../constant/project"
import SessionConstants from "../../constant/session"


export function projects(projects=[], action) {
  switch(action.type) {
    case ProjectConstants.FETCHED:
      projects = action.payload;
      break;
    case ProjectConstants.CREATED:
      projects = [...projects, action.payload];
      break;
    case SessionConstants.SIGN_OUT:
      projects = [projects[0]];
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
