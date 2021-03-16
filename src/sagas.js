import { delay } from 'redux-saga'
import { put, takeEvery, takeLatest, all } from 'redux-saga/effects'

// worker Saga: 비동기 증가 태스크를 수행할겁니다.
export function* incrementAsync() {
  yield delay(1000) // Promise 리턴
  yield put({ type: 'INCREMENT' })
}

// watcher Saga: 각각의 INCREMENT_ASYNC 에 incrementAsync 태스크를 생성할겁니다.
export function* watchIncrementAsync() {
  yield takeLatest('INCREMENT_ASYNC', incrementAsync)
}

// 모든 Saga들을 한번에 시작하기 위한 단일 entry point 입니다.
export default function* rootSaga() {
  yield all([
    watchIncrementAsync()
  ])
}