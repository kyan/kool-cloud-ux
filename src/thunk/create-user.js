import UserConstants from "../constant/user"

export default function (dispatch, getState) {
    dispatch(
      { 
        type: UserConstants.CREATE, 
        payload: {
          id: '17345678567',
          nickname: 'Joccy',
          name: 'Jocelyn',
          surname: 'Barrie'
        }
      }
    );
}