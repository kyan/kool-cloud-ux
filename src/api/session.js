import axios from 'axios'

const client = axios.create({
  baseURL: 'http://localhost:8000/',
  json: true
});

export function signIn(data, cb, error) {
  client({
    method: 'post',
    url: '/signin',
    data: data
  }).then(cb).catch(error);
}

export function signOut(data, cb, error ) {
  client({
    method: 'post',
    url: '/signout',
    data
  }).then(cb).catch(error);
}