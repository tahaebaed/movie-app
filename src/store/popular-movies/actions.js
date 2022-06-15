import { POPULAR_MOVIES_REQUEST, POPULAR_MOVIES_RESPONSE } from './types';

export const popularMovieRequest = (page, query) => ({
  type: POPULAR_MOVIES_REQUEST,
  page,
  query,
});

export const popularMovieResponse = payload => ({
  type: POPULAR_MOVIES_RESPONSE,
  payload,
});
