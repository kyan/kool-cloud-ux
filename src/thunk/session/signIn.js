import SessionConstants from '../../constant/session';
import { signIn } from '../../api/session'
import readProjectsList from '../projects/read-projects-list'

function formInfoComplete(signForm, dispatch) {
  const session = {
    user: signForm,
    errors: {}
  }

  if (!signForm.user) {
    session.errors.user = 'User is Required';
  }

  if (!signForm.password) {
    session.errors.password = 'Password is Required';
  }

  if (!hasNoProps(session.errors)) {
    dispatch({ type: SessionConstants.SIGNIN_FAILED, payload:session });
    return false
  }
  return true;
}

function hasNoProps(map) {
  for(var key in map) {
    if (map.hasOwnProperty(key)) {
       return false;
    }
  }
  return true;
}

export default function (signForm) {
  return (dispatch, getState) => {
    dispatch({ type: SessionConstants.SIGNING_IN });

    if(formInfoComplete(signForm, dispatch)){
      signIn(
        signForm,
        (res)=>{
          if (res.data.error) {
            const session = {
              user: signForm,
              errors: {
                flash: res.data.error
              }
            }
            dispatch({ type: SessionConstants.SIGNIN_FAILED, payload:session });
          }

          const session = {
            jwt: res.data.jwt,
            user: {
              id: res.data.userid,
              name: signForm.user, 
              password: ''
            },
            networkState: SessionConstants.SIGNED_IN
          }

          localStorage.setItem('session', JSON.stringify(session));
          
          dispatch({ type: SessionConstants.SIGNED_IN, payload:session });
          dispatch(readProjectsList);
          window.location='/#'
        },
        (error) => {
          const session = {
            user: signForm,
            errors: {
              flash: error
            }
          }
          dispatch({ type: SessionConstants.SIGNIN_FAILED, payload:session });
        }
      );
    }
  }
}