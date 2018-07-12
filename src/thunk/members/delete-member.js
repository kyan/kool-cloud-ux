
import { dispatch } from '../../store/store';
import { modify }  from '../../signal/project';

export default function deleteMember (member) {
  dispatch (function(dispatch, getState) {
    const project = getState().activeProject;
    
    if (member) {
      const newMembers = project.members.filter((m) => {
        return (member.userid !== m.userid)
      })

      modify({
        members: [
          ...newMembers
        ]
      })
      
    }
  });
}
