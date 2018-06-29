import { createStore } from "redux"
import middleWare from "../middleware"
import reducers from "./reducer"

const store = createStore(reducers, {}, middleWare);

export const dispatch = store.dispatch;

export const state = () => store.getState();

export default store;
