import ProjectConstants from "../constant/project"
import faker from "faker"

export default function (dispatch, getState) {
  setTimeout(() => {
    dispatch(
      { 
        type: ProjectConstants.FETCHED, 
        payload: [
          {
              id: "4567567883",
              title: "Fire Waltz",
              image: faker.image.avatar(),
              ownerid: '1734568887567',
              status: "public",
              notifications: "" 
          },
          {
            id: "3456789",
            title: "Arrolla",
            image: faker.image.avatar(),
            ownerid: '345678',
            members: [
              {
                userid: '12345678',
                role: 'producer'
              },
              {
                userid: '12345678',
                role: 'qa'
              },
              {
                userid: '12345678',
                role: 'animator'
              }
            ],
            notifications: "permissions request" 
          },
          {
            id: "456783",
            title: "Lazlo",
            image: faker.image.avatar(),
            ownerid: '17345678',
            members: [
              {
                userid: '12345678',
                role: 'producer'
              },
              {
                userid: '12345678',
                role: 'qa'
              },
              {
                userid: '12345678',
                role: 'animator'
              }
            ],
            notifications: "permissions request" 
          },
          {
            id: "4567567883",
            title: "Gigamesh",
            image: faker.image.avatar(),
            ownerid: '1734567567898',
            notifications: "" 
          }
        ]
      }
    );
  }, 500);
}
