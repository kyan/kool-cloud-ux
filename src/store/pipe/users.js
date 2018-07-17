import { state } from '../store'

export default function users() {
  return state().users;
}

export function userWithID(id) {
  return state().users.find(user => user.d===id);
}
