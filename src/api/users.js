
import axios from 'axios'
import { state } from "../store/store"
const client = axios.create({
  baseURL: 'http://localhost:8000/',
  json: true
});

const addSessionParams = (url) => {
  const session = state().session;
  
  if (session.jwt) {
    url=`${url}?userid=${session.user.id}&jwt=${session.jwt}`
  }
  return url;
}

export const readUserList = (cb, error) => {
  client({
    method: 'get',
    url: addSessionParams('/users')
  }).then(cb).catch(error);
}

export function createUser (data, cb, error ) {
  client({
    method: 'post',
    url: addSessionParams('/users'),
    data
  }).then(cb).catch(error);
}

export function readUser (id, cb, error) {
  client({
    method: 'get',
    url: addSessionParams(`/users/${id}`)
  }).then(cb).catch(error);
}

export function updateUser (data, cb, error) {
  client({
    method: 'put',
    url: addSessionParams(`/users/${data.id}`),
    data
  }).then(cb).catch(error);
}

export function deleteUser(cb, error, id) {
  client({
    method: 'delete',
    url: addSessionParams(`/users/${id}`)
  }).then(cb).catch(error);
}
