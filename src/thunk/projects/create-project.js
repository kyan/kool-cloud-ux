import ProjectConstants from "../../constant/project"
import { createProject }  from '../../api/projects';

export default function (dispatch, getState) {
  dispatch({ type: ProjectConstants.CREATING });
  console.log('creating project');

  const formData = {
    'title': 'My new film',
    'description': 'my new film description',
    'status': 'private'
  }
  

  createProject(
    req => {
      console.log(req.data);
      if(req.data.error) {
        console.log('API Error: ', req.data.error);
      }
      // dispatch(
      //   {
      //     type: ProjectConstants.CREATED,
      //     payload: req.data
      //   }
      // );
    },
    (error)=> {
      console.log('createProject error : ', error)
    },
    formData
  )
}

