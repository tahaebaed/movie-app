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
