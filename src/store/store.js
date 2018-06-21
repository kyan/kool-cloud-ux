import { createStore } from "redux"
import middleWare from "../middleware"
import reducers from "../reducer"

export default createStore(reducers, {}, middleWare);
