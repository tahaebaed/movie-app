import { call, put, takeLatest } from 'redux-saga/effects';
import { popularMovieResponse } from './actions';
import { fetchPopularData } from './api';
import { POPULAR_MOVIES_REQUEST } from './types';

function* getPopularMovie({ page, query }) {
  try {
    console.log(page);
    const response = yield call(fetchPopularData, page, query);
    const { data } = response;
    yield put(popularMovieResponse(data));
  } catch (error) {
    console.error(error);
  }
}

function* popularSaga() {
  yield takeLatest(POPULAR_MOVIES_REQUEST, getPopularMovie);
}

export default popularSaga;
