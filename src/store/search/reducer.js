import * as TYPES from './types';

function searchResultReducer(initState = null, action) {
  switch (action.type) {
    case TYPES.MOVIE_SEARCH_REQUEST:
      return (initState = 'loading');
    case TYPES.MOVIE_SEARCH_RESPONSE:
      return (initState = { ...action.movieInfo });
    default:
      return initState;
  }
}

export default searchResultReducer;
