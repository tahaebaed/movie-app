import { combineReducers } from 'redux';
import movieInfoReducer from '../movie/reducer';
import popularReducer from '../popular-movies/reducer';

const reducers = combineReducers({
  popular: popularReducer,
  movie: movieInfoReducer,
});

export default reducers;
