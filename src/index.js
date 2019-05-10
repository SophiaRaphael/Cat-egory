import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import rootReducer from './reducer'
import './index.css';
import App from './App';

let store = createStore(rootReducer, applyMiddleware(thunk))

console.log("Current state" + JSON.stringify(store.getState()))

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

