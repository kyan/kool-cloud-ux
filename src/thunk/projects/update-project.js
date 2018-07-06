import ProjectConstants from "../../constant/project"
import { updateProject }  from '../../api/projects';
import { dispatch } from '../../store/store';
export default function update () {
  dispatch (
    function(dispatch, getState) {
    
      dispatch({ type: ProjectConstants.UPDATING });
      const project = getState().activeProject;

      
    if (!project.title || !project.description) {
      dispatch({
        type: ProjectConstants.UPDATE_FAILED,
        payload: { header: 'Incomplete', message: 'Project name and description needed'}
      });
      return
    } 

    updateProject(
      project,
      req => {
        if (req.data.error) {
          dispatch({
              type: ProjectConstants.UPDATE_FAILED,
              payload: { header: 'Error ', message: req.data.error} 
          });
          return;
        }
        dispatch(
          {
            type: ProjectConstants.UPDATED,
            payload: req.data.project
          }
        );
        window.location=`#/project/show/${project.id}`
      },
      (error) => {
        dispatch({
            type: ProjectConstants.UPDATE_FAILED,
            payload: { header: 'Network Failure ', message: error} 
        });
      }
    )
  });
}

