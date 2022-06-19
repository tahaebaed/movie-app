import { call, put, takeLatest } from 'redux-saga/effects'
import { handleSearchQueryResponse, handleSearchResponse } from './actions'
import { fetchSearchData } from './apis'
import * as TYPES from './types'

function* getSearchMovies({ page, query }) {
  try {
    const searchResponse = yield call(fetchSearchData, query, page)
    const { data } = searchResponse
    yield put(handleSearchResponse(data))
  } catch (error) {
    console.error(error)
  }
}

function* getSearchMoviesQuery({ payload }) {
  try {
    yield put(handleSearchQueryResponse(payload))
  } catch (error) {
    console.error(error)
  }
}

function* searchSaga() {
  yield takeLatest(TYPES.MOVIE_SEARCH_REQUEST, getSearchMovies)
  yield takeLatest(TYPES.SEARCH_MOVIES_QUERY_REQUEST, getSearchMoviesQuery)
}

export default searchSaga
