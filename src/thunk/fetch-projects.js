import ProjectConstants from "../constant/project"
import faker from "faker"

export default function (dispatch, getState) {
  dispatch({ type: ProjectConstants.FETCH });
  
  setTimeout(() => {
    dispatch(
      { 
        type: ProjectConstants.FETCHED,
        payload: [
          {
              id: "4567567883",
              title: "Fire Waltz",
              description:"This is a short description of : Fire Waltz",
              image: faker.image.avatar(),
              ownerid: '1734568887567',
              status: "public",
              notifications: "" 
          }
        ]
      }
    );
  }, 2000)
}
