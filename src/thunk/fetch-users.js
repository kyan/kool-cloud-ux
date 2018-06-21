
import UserConstants from "../constant/user"

export default function (dispatch, getState) {
  
  dispatch(
    { 
      type: UserConstants.FETCH,
      payload: [
        {
            id: '345678',
            nickname: 'javanai',
            firstname: 'John',
            surname: 'Barrie'
          },
          {
            id: '12345678',
            nickname: 'LuckyLuke',
            firstname: 'Luc',
            surname: 'Camilli'
          }, 
          {
            id: '17345678',
            nickname: 'Nico',
            firstname: 'Nicolas',
            surname: 'LeMee'
          },
          {
            id: '1734567567898',
            nickname: 'Jo',
            firstname: 'Joanna',
            surname: 'Jojo'
          },
          {
            id: '1734568887567',
            nickname: 'MAAARC',
            firstname: 'Marc',
            surname: 'Menagere'
          }
      ] 
    }
  )
}