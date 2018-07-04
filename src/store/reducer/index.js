import { combineReducers } from "redux"
import { projects, searchFilter, activeProject } from "./projects-reducer"
import session from "./session-reducer"
import users from "./users-reducer"

export default combineReducers({ 
  users,
  session,
  projects,
  activeProject,
  searchFilter,
});

