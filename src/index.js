import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux"
import App from './app';
import registerServiceWorker from './registerServiceWorker';
import store from "./store/store"
import init  from './action/init'
store.dispatch(init);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();




  


