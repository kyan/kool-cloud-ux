import { poll } from '../utils/network/service'

export const readAllItems = (cb, error) => {
  poll('get', '/projects', cb, error);
}

export function createItem (data, cb, error ) {
  poll('post', '/projects', cb, error, data);
}

export function readItem (id, cb, error) {
  poll('get', `/projects/${id}`, cb, error);
}

export function updateItem (data, cb, error) {
  poll('put', `/projects/${data.id}`, cb, error, data);
}

export function deleteItem(cb, error, id) {
  poll('delete', `/projects/${id}`, cb, error);
}
