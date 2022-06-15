import { combineReducers } from 'redux';
import searchResultReducer from '../search/reducer';
import popularReducer from '../popular-movies/reducer';

const reducers = combineReducers({
  popular: popularReducer,
  search: searchResultReducer,
});

export default reducers;
