import fetchProjects from './fetch-projects'

export default function (dispatch, getState) {
  dispatch(fetchProjects);
}
