import * as TYPES from './types';

export const handleSearchRequest = query => ({
  type: TYPES.MOVIE_SEARCH_REQUEST,
  query,
});

export const handleSearchResponse = movieInfo => ({
  type: TYPES.MOVIE_SEARCH_RESPONSE,
  movieInfo,
});
