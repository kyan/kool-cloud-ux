import { state } from '../store'

export const session = {

  get signedIn() {
    return !!state().session.jwt;
  },

  get userName() {
    return state().session.user.name;
  },

  get userId() {
    return state().session.user.id;
  },

  get errors() {
    return state().session.errors;
  },

  get networkState() {
    return state().session.networkState;
  },

} 
