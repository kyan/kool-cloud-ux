
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

export const readShotList = (projectid, cb, error) => {
  client({
    method: 'get',
    url: addSessionParams(`/projects/${projectid}/shots`)
  }).then(cb).catch(error);
}

export function createShot (projectid, data, cb, error ) {
  client({
    method: 'post',
    url: addSessionParams(`/projects/${projectid}/shots`),
    data
  }).then(cb).catch(error);
}

export const readShot = (projectid, id, cb, error) => {
  client({
    method: 'get',
    url: addSessionParams(`/projects/${projectid}/shots/${id}`)
  }).then(cb).catch(error);
}

export function updateShot (projectid, data, cb, error) {
  client({
    method: 'put',
    url: addSessionParams(`/projects/${projectid}/shots/${data.id}`),
    data
  }).then(cb).catch(error);
}

export function deleteShot(projectid, shotid, cb, error, ) {
  client({
    method: 'delete',
    url: addSessionParams(`/projects/${projectid}/shots/${shotid}`)
  }).then(cb).catch(error);
}