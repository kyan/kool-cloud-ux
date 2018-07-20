import { combineReducers } from "redux"
import { projects, searchFilter, activeProject, projectCreationState } from "./projects-reducer"
import session from "./session-reducer"
import { users, userSearchFilter } from "./users-reducer"
import { busyModal, decisionModal, videoModal } from "./ux-reducer"

export default combineReducers({ 
  users,
  session,
  projects,
  activeProject,
  projectCreationState,
  searchFilter,
  userSearchFilter,
  busyModal,
  decisionModal, 
  videoModal
});

