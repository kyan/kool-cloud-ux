const apiMiddleWare = (store) => (next) => (action) => {  
  next(action)
}

export default apiMiddleWare;
