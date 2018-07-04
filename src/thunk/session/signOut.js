import SessionConstants from '../../constant/session';
import { signOut } from '../../api/session'
import readProjectsList from '../projects/read-projects-list'

function emptySession () {
  return {
    jwt: '',
    user: {
      id: '',
      name: '', 
      password: ''
    },
    networkState: SessionConstants.SIGNED_OUT
  }
}

export default function (dispatch) {
    dispatch({ type: SessionConstants.SIGNING_OUT });

    signOut(
      {
        userid: 'john45678',
        jwt: 'john45678_fakejwt'
      },
      (res)=>{
        if (res.data.error) {}

        const session = emptySession();
        localStorage.setItem('session', JSON.stringify(session));
        dispatch({ type: SessionConstants.SIGNED_OUT, payload:session });
        dispatch(readProjectsList);
        window.location='/#'
      },
      (error) => {
        const session = emptySession ()
        dispatch({ type: SessionConstants.SIGNOUT_FAILED, payload: session });
      }
    );
    
}
