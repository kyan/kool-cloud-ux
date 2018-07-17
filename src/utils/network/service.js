import axios from 'axios'
import { state } from "../../store/store"

export const client = axios.create({
  baseURL: 'http://localhost:8000/',
  json: true
});

export const addSessionParams = (url) => {
  const session = state().session;
  
  if (session.jwt) {
    url=`${url}?userid=${session.user.id}&jwt=${session.jwt}`
  }
  return url;
}

export const poll = (method, url, cb, error, data) =>{
  client({
    method: method,
    url: addSessionParams(url),
    data
  }).then(cb).catch(error);
}
