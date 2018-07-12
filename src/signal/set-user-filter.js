import UserConstants from "../constant/user";
import store from "../store/store"

export default function setUserFilterAction(filterValue) {
  store.dispatch({
    type: UserConstants.SET_USER_SEARCH_FILTER,
    payload: filterValue
  });
}
