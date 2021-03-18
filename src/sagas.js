import { delay } from 'redux-saga'
import { put, takeEvery, takeLatest, all } from 'redux-saga/effects'

// 1000ms만큼 지연시킨 뒤에 INCREMENT를 dispatch
export function* incrementAsync() {
  yield delay(1000) // Promise 리턴
  yield put({ type: 'INCREMENT' })
}

// INCREMENT_ASYNC action이 들어올 때 incrementAsync 호출
export function* watchIncrementAsync() {
  // takeLatest는 delay가 끝나기 전에 같은 action이 들어오는 경우 마지막 action만 동작하도록 한다.
  yield takeLatest('INCREMENT_ASYNC', incrementAsync) 
}

// 모든 Saga들을 한번에 시작하기 위한 단일 entry point
export default function* rootSaga() {
  yield all([
    watchIncrementAsync()
  ])
}