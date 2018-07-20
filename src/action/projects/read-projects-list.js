import ProjectConstants from '../../constant/project'
import { readAllItems }  from '../../api/project';

export default function (dispatch, getState) {
  dispatch({ type: ProjectConstants.LISTING });
    
  readAllItems(
    req => {
      console.log('req.data', req.data)
      dispatch(
        {
          type: ProjectConstants.LISTED,
          payload: req.data
        }
      );
    },
    (error)=> {
      console.log('readProjectsList error : ', error)
    }
  )
}
