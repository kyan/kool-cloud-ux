import _ from "lodash";
import { state } from '../store/store'

export default function filterUsers() {
  const re = new RegExp(_.escapeRegExp(state().userSearchFilter), 'i');
  const isMatch = result => re.test(result.name); 
  const members = state().activeProject.members;
  const searchedUsers = _.filter(state().users, isMatch).map((user) =>{
    return {
      ...user,
      title: user.name,
      description: user.email
    }
  }).filter((user) => {
     const memberExists = members.find((member) => {
      return (member.userid === user.id)
    })
    return !memberExists;
  })

  return _.filter(searchedUsers, isMatch);
}
