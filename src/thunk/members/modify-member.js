
import { dispatch } from '../../store/store';
import { modify }  from '../../signal/project';

export default function modifyMember (modifiedMember) {
  dispatch (function(dispatch, getState) {
    const project = getState().activeProject;
    
    if (modifiedMember) {
      const newMembers = project.members.map(member => { 
          return (
            (modifiedMember.userid === member.userid) ?
            { ...modifiedMember } :
            { ...member }
          )
        }
      );

      modify({
        members: [
          ...newMembers
        ]
      })
      
    }
  });
}
