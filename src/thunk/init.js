import fetchProjects  from './fetch-projects'
import createProjects  from './create-project'
import fetchUsers  from './fetch-users'
import createUser  from './create-user'

export default function (dispatch, getState) {
  dispatch(fetchProjects);
  dispatch(createProjects);
  dispatch(fetchUsers);
  dispatch(createUser);
}
