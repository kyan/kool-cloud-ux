
import store from '../store/store'

export default {

  get store() {
    return store.getState();
  },

  get projects() {
    return store.getState().projects;
  },

  get searchFilter() {
    return store.getState().searchFilter;
  },

  get users() {
    return store.getState().users;
  },

  get session() {
    return store.getState().session;
  },

}
