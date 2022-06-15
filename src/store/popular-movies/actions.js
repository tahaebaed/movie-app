import { POPULAR_MOVIES_REQUEST, POPULAR_MOVIES_RESPONSE } from './types';

export const popularMovieRequest = () => ({
  type: POPULAR_MOVIES_REQUEST,
});

export const popularMovieResponse = payload => ({
  type: POPULAR_MOVIES_RESPONSE,
  payload,
});
