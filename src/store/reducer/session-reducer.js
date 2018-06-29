import SessionConstants from "../../constant/session"

const initialSession = {
  user: { 
    name:'', 
    email: '',
  },
  jwt: null,
  networkState: SessionConstants.SIGNED_OUT
}

const session = function (state=initialSession, action) {
  switch(action.type) {
    case SessionConstants.SIGNED_INPROGRESS:
      state = {...state, networkState: SessionConstants.SIGNED_INPROGRESS};
      break;
    case SessionConstants.SIGNED_IN:
      state = {...state, networkState: SessionConstants.SIGNED_IN, ...action.payload};
      break
    case SessionConstants.SIGN_OUT:
      state = { networkState: SessionConstants.SIGN_OUT};
      break
    case SessionConstants.SIGNIN_FAILED:
      state = {...state,  networkState: SessionConstants.SIGNIN_FAILED, ...action.payload};
      break
    default:
  }
  return state;
};

export default session;
