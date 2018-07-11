import ShotConstants from "../../constant/shot"
import { createShot }  from '../../api/shots';
import { dispatch } from '../../store/store';
import readProject from "../projects/read-project"
export default function create (shotObject) {
  dispatch (function(dispatch, getState) {
     dispatch({ type: ShotConstants.CREATING });
    
    const project = getState().activeProject;


    if (!project || !shotObject.title || !shotObject.description) {
      dispatch({
        type: ShotConstants.CREATE_FAILED,
        payload: { header: 'Incomplete', message: 'SHot name and description needed'}
      });
      return
    }

     createShot(
      project.id,
      shotObject,
      req => {
        if (req.data.error) {
          dispatch({
            type: ShotConstants.CREATE_FAILED,
            payload: { header: 'Error ', message: req.data.error} 
          });
          return;
        }
        
        dispatch(
          {
            type: ShotConstants.CREATED,
            payload: req.data.project
          }
        );
        
        dispatch(readProject(project.id))
        //window.location=`#/project/show/${req.data.project.id}`
      },
      (error) => {
        dispatch({
            type: ShotConstants.CREATE_FAILED,
            payload: { header: 'Network Failure ', message: error} 
        });
      }
    )
  });
}

