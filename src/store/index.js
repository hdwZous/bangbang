import { createStore, applyMiddleware } from 'redux'
// import promiseMiddleware from 'redux-promise'
import logger from 'redux-logger'
import rootReducer from './reducers'
import createSagaMiddleware from 'redux-saga'

export default function configStore () {
  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(rootReducer, applyMiddleware(sagaMiddleware, logger))
  return {...store, runSaga: sagaMiddleware.run}
}
