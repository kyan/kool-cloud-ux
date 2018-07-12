import UserConstants from "../../constant/user"
import { readUserList }  from '../../api/users';

export default function (dispatch, getState) {
  dispatch({ type: UserConstants.LISTING });
    
  readUserList(
    req => {
      dispatch(
        {
          type: UserConstants.LISTED,
          payload: req.data
        }
      );
    },
    (error)=> {
      console.log('readProjectsList error : ', error)
    }
  )
}


