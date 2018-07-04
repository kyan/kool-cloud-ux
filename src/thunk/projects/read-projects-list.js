import ProjectConstants from "../../constant/project"
import { readProjectsList }  from '../../api/projects';

export default function (dispatch, getState) {
  dispatch({ type: ProjectConstants.LISTING });
    
  readProjectsList(
    req => {
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
