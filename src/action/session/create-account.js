
import ModalConstant from '../../constant/modal'
import SessionConstant from '../../constant/session'
import { dispatch } from '../../store/store'
import { createUser } from '../../api/session'

export default function createAccountAction(submittedForm) {
  dispatch(() => {
    dispatch({ type: ModalConstant.OPEN_BUSY_MODAL, payload:{ message:'Creating account' } });
    const sendableFormInfo = formInfoComplete(submittedForm);
    if (sendableFormInfo) {
      createUser(
        sendableFormInfo,
        (res)=>{
          dispatch({ type: ModalConstant.CLOSE_BUSY_MODAL});    
          if (res.data.error) {
            const accountInfo = {
              account: submittedForm,
              errors: res.data.error
            };

            dispatch({ type: SessionConstant.CREATE_ACCOUNT_FAILED, accountInfo });
            return;
          }

          dispatch({ type: SessionConstant.CREATED_ACCOUNT });
          window.location='/#/signin'
        },
        (error) => {
          const accountInfo = {
            account: submittedForm,
            errors: error
          };
          dispatch({ type: ModalConstant.CLOSE_BUSY_MODAL});   
          submittedForm.error = error; 
          dispatch({ type: SessionConstant.CREATE_ACCOUNT_FAILED, accountInfo });
        }
      );
    } 
  });
}

function formInfoComplete(submittedAccountForm) {
  const accountInfo = {
    account: submittedAccountForm,
    errors: {}
  }

  if (!submittedAccountForm.name) {
    accountInfo.errors.name = 'User is required';
  }

  if (!submittedAccountForm.email) {
    accountInfo.errors.email = 'Email required';
  }

  if (!submittedAccountForm.password1) {
    accountInfo.errors.password1 = 'Password is required';
  }

  if (!submittedAccountForm.password2) {
    accountInfo.errors.password2 = 'Password confirmation is required';
  }

  if (submittedAccountForm.password1 !== submittedAccountForm.password2) {

    accountInfo.errors.password1 = accountInfo.errors.password2 = 'Passwords should be identical';
  }
  console.log(submittedAccountForm)

  if (!hasNoProps(accountInfo.errors)) {
    accountInfo.errors.flash = 'Incomplete';
    dispatch({ type: ModalConstant.CLOSE_BUSY_MODAL}); 
    dispatch({ type: SessionConstant.CREATE_ACCOUNT_FAILED, payload:accountInfo });
    return false
  }

  const submitableForm = {
    ...submittedAccountForm,
    password1: null,
    password2: null,
    password: submittedAccountForm.password1
  };
  delete submitableForm.password1;
  delete submitableForm.password2;

  return submitableForm;
}

function hasNoProps(map) {
  for(var key in map) {
    if (map.hasOwnProperty(key)) {
       return false;
    }
  }
  return true;
}