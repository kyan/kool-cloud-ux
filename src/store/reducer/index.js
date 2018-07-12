import { combineReducers } from "redux"
import { projects, searchFilter, activeProject, projectCreationState } from "./projects-reducer"
import session from "./session-reducer"
import { users, userSearchFilter } from "./users-reducer"

export default combineReducers({ 
  users,
  session,
  projects,
  activeProject,
  projectCreationState,
  searchFilter,
  userSearchFilter,
});

