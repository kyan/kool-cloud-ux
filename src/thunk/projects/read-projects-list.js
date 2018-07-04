import ProjectConstants from "../../constant/project"
import { readProjectsList }  from '../../api/projects';

export default function (dispatch, getState) {
  dispatch({ type: ProjectConstants.READING });
    
  readProjectsList(
    req => {
      dispatch(
        {
          type: ProjectConstants.READ,
          payload: req.data
        }
      );
    },
    (error)=> {
      console.log('readProjectsList error : ', error)
    }
  )
}
