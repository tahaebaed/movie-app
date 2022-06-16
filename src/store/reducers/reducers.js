import { combineReducers } from 'redux'
import searchResultReducer from '../search/reducer'
import popularReducer from '../popular-movies/reducer'
import watchListReducer from '../watchList.js/reducer'

const reducers = combineReducers({
  popular: popularReducer,
  search: searchResultReducer,
  watchList: watchListReducer,
})

export default reducers
