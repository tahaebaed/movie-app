import * as TYPES from './types';

export const handleMovieRequest = id => ({
  type: TYPES.MOVIE_INFO_REQUEST,
  id,
});

export const handleMovieResponse = movieInfo => ({
  type: TYPES.MOVIE_INFO_RESPONSE,
  movieInfo,
});

export const handleMovieCastRequest = id => ({
  type: TYPES.MOVIE_CAST_INFO_REQUEST,
  id,
});

export const handleMovieCastResponse = castInfo => ({
  type: TYPES.MOVIE_CAST_INFO_RESPONSE,
  castInfo,
});
