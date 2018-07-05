import ProjectConstants from "../../constant/project"
import { createProject }  from '../../api/projects';
import { dispatch } from '../../store/store';
export default function create () {
  dispatch (function(dispatch, getState) {
    dispatch({ type: ProjectConstants.CREATING });
    
    const project = getState().activeProject

    if(!project.title || !project.description) {
      dispatch({
        type: ProjectConstants.CREATE_FAILED,
        payload: { header: 'Incomplete', message: 'Project name and description needed'}
      });
      return
    }

    createProject(
      project,
      req => {
        if (req.data.error) {
          dispatch({
              type: ProjectConstants.CREATE_FAILED,
              payload: { header: 'Error ', message: req.data.error} 
          });
          return;
        }
        dispatch(
          {
            type: ProjectConstants.CREATED,
            payload: req.data.project
          }
        );
        window.location=`#/project/show/${req.data.project.id}`
      },
      (error)=> {
        debugger
        dispatch({
            type: ProjectConstants.CREATE_FAILED,
            payload: { header: 'Network Failure ', message: error} 
        });
      }
    )
  });
}

