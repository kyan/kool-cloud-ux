import ModalConstants from '../../constant/modal'
import ProjectConstants from '../../constant/project'
import { createItem }  from '../../api/project'
import { dispatch } from '../../store/store'

const closeModal = () => {
  dispatch({ type: ModalConstants.CLOSE_BUSY_MODAL });
}

export default function create () {
  dispatch (function(dispatch, getState) {
    dispatch({ type: ModalConstants.OPEN_BUSY_MODAL, payload: { message: 'Creating project' } });
    
    const project = getState().activeProject;

    if (!project.title || !project.description) {
      closeModal();

      dispatch({
        type: ProjectConstants.CREATE_FAILED,
        payload: { header: 'Incomplete', message: 'Project name and description needed'}
      });
      return;
    }

    createItem(
      project,
      req => {
        closeModal();
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
      (error) => {
        closeModal();
        dispatch({
            type: ProjectConstants.CREATE_FAILED,
            payload: { header: 'Network Failure ', message: error} 
        });
      }
    )
  });
}

