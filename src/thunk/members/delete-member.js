
import { dispatch } from '../../store/store';
import ModalConstants  from '../../constant/modal'
import { modify }  from '../../signal/project';

export default function deleteMember (member) {
  dispatch (function(dispatch, getState) {
    const project = getState().activeProject;
    
    if (member) {
      const newMembers = project.members.filter((m) => {
        return (member.userid !== m.userid)
      })

      dispatch (
        { 
          type: ModalConstants.OPEN_DECISION_MODAL, 
          payload: {
            accept: () => {
              modify({
                members: [
                  ...newMembers
                ]
              })
            },
            reject: () => {
              console.log('reject');
              dispatch ({ type: ModalConstants.CLOSE_DECISION_MODAL })
            },
            title: 'John'
          }
        }
      );

      // modify({
      //   members: [
      //     ...newMembers
      //   ]
      // })
      
    }
  });
}
