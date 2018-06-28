import SessionConstants from "../constant/session"
import store from "../store/store"

export function signOutClick(filterValue) {
  return ((e) => {
    store.dispatch({
      type: SessionConstants.SIGN_OUT
    });
    e.preventDefault();
  })
  
}


