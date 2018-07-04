
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
export const readProjectsList = (cb, error) => {
  
  client({
    method: 'get',
    url: addSessionParams('/projects')
  }).then(cb).catch(error);
}

export function createProject (data, cb, error ) {
  client({
    method: 'post',
    url: addSessionParams('/projects'),
    data
  }).then(cb).catch(error);
}

export function readProject (id, cb, error) {
  client({
    method: 'get',
    url: addSessionParams(`/projects/${id}`)
  }).then(cb).catch(error);
}

export function updateProject (id, data, cb, error) {
  client({
    method: 'put',
    url: addSessionParams(`/projects/${id}`),
    data
  }).then(cb).catch(error);
}

export function deleteProject(cb, error, id) {
  client({
    method: 'delete',
    url: addSessionParams(`/projects/${id}`)
  }).then(cb).catch(error);
}