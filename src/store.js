import createSagaMiddleware from 'redux-saga';
import rootSagas from './sagas';
const { createStore, applyMiddleware } = require('redux');
const reducer = require('./reducer');

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(rootSagas)

export default store;