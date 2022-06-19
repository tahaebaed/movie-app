import { call, put, takeLatest } from 'redux-saga/effects'
import { popularMovieAPIResponse, popularMovieResponse } from './actions'
import { fetchPopularData } from './api'
import { POPULAR_MOVIES_QUERY_REQUEST, POPULAR_MOVIES_REQUEST } from './types'

function* getPopularMovie({ page, query }) {
  try {
    const response = yield call(fetchPopularData, page, query)
    const { data } = response
    yield put(popularMovieResponse(data))
  } catch (error) {
    console.error(error)
  }
}
function* getPopularMovieWithQuery({ payload }) {
  try {
    yield put(popularMovieAPIResponse(payload))
  } catch (error) {
    console.error(error)
  }
}
function* popularSaga() {
  yield takeLatest(POPULAR_MOVIES_REQUEST, getPopularMovie)
  yield takeLatest(POPULAR_MOVIES_QUERY_REQUEST, getPopularMovieWithQuery)
}

export default popularSaga
