import * as TYPES from './types';

function movieInfoReducer(initState = null, action) {
  switch (action.type) {
    case TYPES.MOVIE_INFO_REQUEST:
      return (initState = 'loading');
    case TYPES.MOVIE_INFO_RESPONSE:
      return (initState = { movieInfo: { ...action.movieInfo } });
    case TYPES.MOVIE_CAST_INFO_RESPONSE:
      return (initState = { ...initState, castInfo: { ...action.castInfo } });
    default:
      return initState;
  }
}

export default movieInfoReducer;
