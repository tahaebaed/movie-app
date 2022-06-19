import * as TYPES from './types'

function searchResultReducer(initState = null, action) {
  switch (action.type) {
    case TYPES.MOVIE_SEARCH_REQUEST:
      return (initState = 'loading')
    case TYPES.MOVIE_SEARCH_RESPONSE:
      return (initState = { ...action.movieInfo })
    case TYPES.SEARCH_MOVIES_QUERY_RESPONSE:
      return (initState = { ...action.payload?.data })
    default:
      return initState
  }
}

export default searchResultReducer
