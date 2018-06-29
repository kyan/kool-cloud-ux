import { state } from '../store/store'

export const session = {

  get signedIn() {
    return !!state().session.jwt;
  },

  get userName() {
    return !!state().session.jwt;
  },

  get errors() {
    return state().session.errors;
  },

  get networkState() {
    return state().session.networkState;
  },

} 
