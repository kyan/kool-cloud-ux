import { poll } from '../utils/network/service'

export const readAllItems = (cb, error) => {
  poll('get', `/users`, cb, error);
}

export function createItem (data, cb, error ) {
  poll('post', '/users', cb, error, data);
}

export function readItem (id, cb, error) {
  poll('get', `/users/${id}`, cb, error);
}

export function updateItem (data, cb, error) {
  poll('put', `/users/${data.id}`, cb, error, data);
}

export function deleteItem(cb, error, id) {
  poll('delete', `/users/${id}`, cb, error);
}
