import SessionConstants from "../../constant/session"

const initialSession = {
  user: { 
    id:'', 
    name:'', 
    email: '',
  },
  jwt: null,
  networkState: SessionConstants.SIGNED_OUT
}

const session = function (state=initialSession, action) {
  switch(action.type) {
    case SessionConstants.SIGNING_IN:
      state = {...state, networkState: SessionConstants.SIGNING_IN};
      break;
    case SessionConstants.SIGNED_IN:
      state = {...state, networkState: SessionConstants.SIGNED_IN, ...action.payload};
      break
    case SessionConstants.SIGNED_OUT:
      state = {...state, ...action.payload,  networkState: SessionConstants.SIGN_OUT};
      break
    case SessionConstants.SIGNIN_FAILED:
      state = {...state,  networkState: SessionConstants.SIGNIN_FAILED, ...action.payload};
      break
    case SessionConstants.CREATING_ACCOUNT:
      state = {...state, networkState: SessionConstants.CREATING_ACCOUNT};
      break;
    case SessionConstants.CREATE_ACCOUNT_FAILED:
      state = {...state, networkState: SessionConstants.CREATE_ACCOUNT_FAILED, ...action.payload};
      break;
    default:
  }
  return state;
};

export default session;
