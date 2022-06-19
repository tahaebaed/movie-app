import * as TYPES from './types'

export const handleSearchRequest = (page, query) => ({
  type: TYPES.MOVIE_SEARCH_REQUEST,
  page,
  query,
})

export const handleSearchResponse = movieInfo => ({
  type: TYPES.MOVIE_SEARCH_RESPONSE,
  movieInfo,
})

export const handleSearchQueryRequest = payload => ({
  type: TYPES.SEARCH_MOVIES_QUERY_REQUEST,
  payload,
})

export const handleSearchQueryResponse = payload => ({
  type: TYPES.SEARCH_MOVIES_QUERY_RESPONSE,
  payload,
})
