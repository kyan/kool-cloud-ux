import SessionConstants from '../constant/session';
import createProject from './create-project'

export function signIn (signForm) {
  return (dispatch, getState) => {
    dispatch({ type: SessionConstants.SIGNIN_INPROGRESS });
    
    setTimeout(() => {
      if (signForm.user==='joh') {
        
        const session= {
          user: {
            name:'John', 
            email: 'john@lamenagerie.com',
          },
          jwt: 'asdfas',
          networkState: SessionConstants.SIGNED_IN
        }

        dispatch({ type: SessionConstants.SIGNED_IN, payload:session });
        dispatch(createProject);
        window.location='/#'
      } else {
        const session= {
          user: {
            name:'John', 
            email: 'john@lamenagerie.com',
          },
          jwt: 'asdfas',
          networkState: SessionConstants.SIGNED_IN,
          errors: {
            user: 'User or password seems wrong'
          }
        }

        dispatch({ type: SessionConstants.SIGNIN_FAILED, payload:session });
      }
    }, 100);
  }
}
