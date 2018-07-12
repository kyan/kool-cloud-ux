import UserConstants from "../../constant/user"

export function users (state=[], action) {
  switch(action.type) {
    case UserConstants.LISTED:
      state = [...state, ...action.payload];
      break
    default:
  }
  return state;
};

export function userSearchFilter (userSearchFilter='', action) {
  switch(action.type) {
    case UserConstants.SET_USER_SEARCH_FILTER:
      userSearchFilter = action.payload;
      break;
    default:
  }
  return userSearchFilter;
};
