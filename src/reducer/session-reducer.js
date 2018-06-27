import SessionConstants from "../constant/session"

const session = function (state={}, action) {
  switch(action.type) {
    case SessionConstants.SIGNEDIN:
      state = {...action.payload};
      break
    case SessionConstants.SIGNEDOUT:
      state = {};
      break
    default:
  }
  return state;
};

export default session;
