import readProjectsList from './projects/read-projects-list'
import users from './users/read-user-list'

import SessionConstants from '../constant/session'
export default function (dispatch, getState) {
  
  dispatch({ type: SessionConstants.SIGNED_IN, payload:JSON.parse(localStorage.getItem('session')) });
  dispatch(users);
  dispatch(readProjectsList);
}
