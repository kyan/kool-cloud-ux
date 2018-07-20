import { poll } from '../utils/network/service'

export function signIn(data, cb, error) {
  poll('post', `/signin`, cb, error, data);
}

export function signOut(data, cb, error ) {
  poll('post', `/signout`, cb, error, data);
}

export function createUser(data, cb, error ) {
  poll('post', `/users`, cb, error, data);
}