import ProjectConstants from "../constant/project"

export function projects(projects=[], action) {
  switch(action.type) {
    case ProjectConstants.FETCHED:
      projects = action.payload
      break;
    case ProjectConstants.CREATED:
      projects = [...projects, action.payload]  
      break;
    default:
  }
  return projects;
};

export function searchFilter (searchFilter='', action) {
  switch(action.type) {
    case ProjectConstants.SEARCH_FILTER:
      searchFilter = action.payload
      break;
    default:
  }
  return searchFilter;
};
