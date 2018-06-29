import SessionConstants from '../constant/session';
import createProject from './create-project'

export function signIn (signForm) {
  return (dispatch, getState) => {
    dispatch({ type: SessionConstants.SIGNIN_INPROGRESS });
    
    setTimeout(() => {
      if (signForm.user==='john' && signForm.password === 'john') {
        const session= {
          user: {
            name: signForm.user, 
            email: 'john@lamenagerie.com',
            password: ''
          },
          jwt: 'asdfas',
          networkState: SessionConstants.SIGNED_IN
        }

        dispatch({ type: SessionConstants.SIGNED_IN, payload:session });
        dispatch(createProject);
        window.location='/#'
      } else if (signForm.user===''){
        const session= {
          user: {
            name: signForm.user,  
            email: '',
            password: signForm.password
          },
          jwt: '',
          errors: {
            user: 'User is Required'
          }
        }

        dispatch({ type: SessionConstants.SIGNIN_FAILED, payload:session });
      } else if (signForm.user==='john' && signForm.password===''){
        const session= {
          user: {
            name: signForm.user,  
            email: '',
            password: signForm.password
          },
          jwt: '',
          errors: {
            password: 'Password is Required'
          }
        }

        dispatch({ type: SessionConstants.SIGNIN_FAILED, payload:session });
      } else {
        const session= {
          user: {
            name: signForm.user,  
            email: '',
            password: signForm.password
          },
          jwt: '',
          errors: {
            user: 'User or Password incorrrect '
          }
        }

        dispatch({ type: SessionConstants.SIGNIN_FAILED, payload:session });

      }
    }, 100);
  }
}
