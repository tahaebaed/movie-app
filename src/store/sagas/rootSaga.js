import { all } from 'redux-saga/effects';
import searchSaga from '../search/saga';
import popularSaga from '../popular-movies/saga';

function* rootSaga() {
  yield all([popularSaga(), searchSaga()]);
}

export default rootSaga;
