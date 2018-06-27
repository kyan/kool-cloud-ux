import ProjectConstants from "../constant/project"

const apiMiddleWare = (store) => (next) => (action) => {
  
  switch (action.type) {
    case ProjectConstants.SET_SEARCH_FILTER:
      
      break;   
    default:
  }
  
  next(action)
}

export default apiMiddleWare;
