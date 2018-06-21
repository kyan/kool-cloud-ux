import UserConstants from "../constant/user"

export function changeUserName(name, state=[]) {
  return {
    type: UserConstants.CHANGE_NAME,
    payload: name
  }
}