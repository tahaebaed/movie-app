import { POPULAR_MOVIES_REQUEST, POPULAR_MOVIES_RESPONSE } from './types'

export const popularMovieRequest = page => ({
  type: POPULAR_MOVIES_REQUEST,
  page,
})

export const popularMovieResponse = payload => ({
  type: POPULAR_MOVIES_RESPONSE,
  payload,
})
