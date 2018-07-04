
import store from "../store/store"
import signOut from "../thunk/session/signOut"

export function signOutClick() {
  return ((e) => {
    store.dispatch(signOut);
    e.preventDefault();
  }) 
}


