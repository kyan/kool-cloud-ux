
import { poll } from '../utils/network/service'

export const readAllItems = (projectid, cb, error) => {
  poll('get', `/projects/${projectid}/shots`, cb, error);
}

export function createShot (projectid, data, cb, error ) {
  poll('post', `/projects/${projectid}/shots`, cb, error, data);
}

export const readShot = (projectid, id, cb, error) => {
  poll('get', `/projects/${projectid}/shots/${id}`, cb, error);
}

export function updateShot (projectid, data, cb, error) {
  poll('put', `/projects/${projectid}/shots/${data.id}`, cb, error, data);
}

export function deleteShot(projectid, shotid, cb, error, ) {
  poll('delete', `/projects/${projectid}/shots/${shotid}`, cb, error);
}