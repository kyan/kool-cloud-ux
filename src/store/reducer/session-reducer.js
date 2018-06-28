import SessionConstants from "../../constant/session"

const initialSession = {
  user: { 
    name:'', 
    email: '',
  },
  jwt: null,
  networkState: SessionConstants.SIGNIN_INPROGRESS
}

const session = function (state=initialSession, action) {
  switch(action.type) {
    case SessionConstants.SIGNED_INPROGRESS:
      state = {...state, };
      break;
    case SessionConstants.SIGNED_IN:
      state = {...state, ...action.payload};
      break
    case SessionConstants.SIGN_OUT:
      state = {};
      break
    default:
  }
  return state;
};

export default session;
