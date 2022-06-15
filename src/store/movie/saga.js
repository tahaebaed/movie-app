import { call, put, takeLatest } from 'redux-saga/effects';
import { handleMovieCastResponse, handleMovieResponse } from './actions';
import { fetchMovieCastInfo, fetchMovieInfo } from './apis';
import * as TYPES from './types';

function* getMovieInfo({ id }) {
  try {
    const movieResponse = yield call(fetchMovieInfo, id);
    const castResponse = yield call(fetchMovieCastInfo, id);
    const { data: movieInfoData } = movieResponse;
    const { data: castInfoData } = castResponse;
    yield put(handleMovieResponse(movieInfoData));
    yield put(handleMovieCastResponse(castInfoData));
  } catch (error) {
    console.error(error);
  }
}

function* movieSaga() {
  yield takeLatest(TYPES.MOVIE_INFO_REQUEST, getMovieInfo);
}

export default movieSaga;
