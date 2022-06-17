import { call, put, takeLatest } from 'redux-saga/effects'
import { handleSearchResponse } from './actions'
import { fetchSearchData } from './apis'
import * as TYPES from './types'

function* getMovieInfo({ page, query }) {
  try {
    const searchResponse = yield call(fetchSearchData, query, page)
    const { data } = searchResponse
    yield put(handleSearchResponse(data))
  } catch (error) {
    console.error(error)
  }
}

function* searchSaga() {
  yield takeLatest(TYPES.MOVIE_SEARCH_REQUEST, getMovieInfo)
}

export default searchSaga
