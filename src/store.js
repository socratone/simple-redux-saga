import createSagaMiddleware from 'redux-saga';
import rootSagas from './sagas';
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducer';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(rootSagas)

export default store;