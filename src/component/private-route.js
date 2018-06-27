import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import store from '../store/store'

const PrivateRoute = ({ component: Component, ...rest }) => {

  const isLoggedIn = () => {
    const session = store.getState().session;
    return !!session.active;
  }

  return (
    <Route
      {...rest}
      render={props =>
        isLoggedIn() ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/signin', state: { from: props.location } }} />
        )
      }
    />
  )
}

export default PrivateRoute