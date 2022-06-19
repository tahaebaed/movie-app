import {
  POPULAR_MOVIES_QUERY_REQUEST,
  POPULAR_MOVIES_QUERY_RESPONSE,
  POPULAR_MOVIES_REQUEST,
  POPULAR_MOVIES_RESPONSE,
} from './types'

export const popularMovieRequest = page => ({
  type: POPULAR_MOVIES_REQUEST,
  page,
})

export const popularMovieResponse = payload => ({
  type: POPULAR_MOVIES_RESPONSE,
  payload,
})

export const popularMovieAPIRequest = payload => ({
  type: POPULAR_MOVIES_QUERY_REQUEST,
  payload,
})
export const popularMovieAPIResponse = payload => ({
  type: POPULAR_MOVIES_QUERY_RESPONSE,
  payload,
})
