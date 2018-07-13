import { state } from '../store/store'

export default function users() {
  return state().users;
}

export function userWithID(id) {
  return state().users.find(user => user.d===id);
}
