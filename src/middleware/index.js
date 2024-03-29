import { applyMiddleware } from "redux"
import thunk from 'redux-thunk';
// import { createLogger } from 'redux-logger'

const errorMiddleWare = (store) => (next) => (action) => {  
  if(!action.type) {
    throw new Error("action.type cannot be undefined");
  }
  try {
    next(action);
  } catch (e) {
    console.log('ErrorMiddleWare!!', e);
  }
}

export default applyMiddleware(thunk, errorMiddleWare);