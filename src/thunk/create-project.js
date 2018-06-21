import ProjectConstants from "../constant/project"
import faker from "faker"

export default function (dispatch, getState) {
  setTimeout(() => {
    dispatch(
      { 
        type: ProjectConstants.CREATED, 
        payload: {
          id: "4567567883",
          title: "Fire Waltz",
          image: faker.image.avatar(),
          ownerid: '1734568887567',
          status: "public",
          notifications: "" 
        }
      }
    );
  }, 10000);
}