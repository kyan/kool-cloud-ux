import Session from '../constant/session';
 
export default function (signForm) {
  return (dispatch, getState) => {
    dispatch({ type: Session.SIGNIN_INPROGRESS });
    setTimeout(() => {
      console.log('signForm ', signForm);
      window.location='/#'
    }, 3000);
  }
}
