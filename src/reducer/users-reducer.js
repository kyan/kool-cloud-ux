import UserConstants from "../constant/user"

const usersReducer = function (state=[], action) {
  switch(action.type) {
    case UserConstants.SET_UP:
      state = [...action.payload];
      break
    case UserConstants.ADD:
      state = [...state, action.payload];
      break
    default:
  }
  return state;
};

export default usersReducer;
