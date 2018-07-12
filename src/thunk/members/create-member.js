
import { dispatch } from '../../store/store';
import { modify }  from '../../signal/project';
import setUserFilterAction   from '../../signal/set-user-filter';
export default function create (user) {
  dispatch (function(dispatch, getState) {
    const project = getState().activeProject;
    const member = project.members.find((member)=> (user.id === member.userid));
    if (!member) {
      modify({
        members: [
          ...project.members,
          { projectid: project.id,
            userid: user.id,
            username: user.name,
            role: "critic"
          }
        ]
      })
      
      setUserFilterAction('')
    }
  });
}

