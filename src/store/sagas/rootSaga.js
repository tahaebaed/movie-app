import { all } from 'redux-saga/effects';
import movieSaga from '../movie/saga';
import popularSaga from '../popular-movies/saga';

function* rootSaga() {
  yield all([popularSaga(), movieSaga()]);
}

export default rootSaga;
