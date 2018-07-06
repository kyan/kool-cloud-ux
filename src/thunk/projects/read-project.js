import ProjectConstants from "../../constant/project"
import { readProject }  from '../../api/projects';

export default function (id) {
  return (dispatch, getState) => {

    dispatch({ type: ProjectConstants.READING });
    
    readProject(
      id,
      req => {
        if(req.data.error) {
          console.log('API Error: ', req.data);
          dispatch(
            {
              type: ProjectConstants.READ,
              payload: { title: 'Failed to load project'}
            }
          );
          return;
        }
        
        dispatch(
          {
            type: ProjectConstants.READ,
            payload: req.data.project
          }
        );
      },
      (error)=> {
        dispatch(
          {
            type: ProjectConstants.READ,
            payload: { error: error.message }
          }
        );
        console.log('createProject error : ', error)
      }
    )
  }
}

