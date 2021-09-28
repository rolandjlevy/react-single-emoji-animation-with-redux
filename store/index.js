import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import emojiReducer from './reducer.js';
const middleware = [];
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__;

const store = createStore(
  emojiReducer, 
  compose(
    applyMiddleware(...middleware),
    devTools && devTools()
  )
);

export default store;