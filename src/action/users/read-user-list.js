import UserConstants from '../../constant/user'
import { readAllItems }  from '../../api/user';

export default function (dispatch) {
  dispatch({ type: UserConstants.LISTING });
    
  readAllItems(
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


