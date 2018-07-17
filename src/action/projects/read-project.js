import ProjectConstants from '../../constant/project'
import { readItem }  from '../../api/project';

export default function (id) {
  return (dispatch) => {
    dispatch({ type: ProjectConstants.READING });
    
    readItem(
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
      }
    )
  }
}

