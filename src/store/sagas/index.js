import { take, select, put, call, fork } from 'redux-saga/lib/effects'
import {ASYNC_INCREMENT} from '../types'
import {increment} from '../actions'

export const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

function *asyncIncrement() {
  while (true) {
    yield take(ASYNC_INCREMENT)

    yield call(delay, 1000)

    yield put( increment() )
  }
}

export default function* rootSaga() {
  yield fork(asyncIncrement)
}
