import ProjectConstants from "../constant/project";
import store from "../store/store"

export default function setProjectFilterAction(filterValue) {
  store.dispatch({
    type: ProjectConstants.SET_SEARCH_FILTER,
    payload: filterValue
  });
}
