import map from '../store/map'

export function isLogged() {
  return !!map.session.jwt;
}

export function networkState() {
  console.log(map.session.networkState);
}
