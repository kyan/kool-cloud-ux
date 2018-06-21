import { combineReducers } from "redux"
import { projects, searchFilter } from "./projects-reducer"
import users from "./users-reducer"

export default combineReducers({ 
  users,
  projects,
  searchFilter,
});

