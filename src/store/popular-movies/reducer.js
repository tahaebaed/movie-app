import * as TYPES from './types'

function popularReducer(initState = null, action) {
  switch (action.type) {
    case TYPES.POPULAR_MOVIES_REQUEST:
      return (initState = 'loading')
    case TYPES.POPULAR_MOVIES_RESPONSE:
      return (initState = { ...action.payload })
    case TYPES.POPULAR_MOVIES_QUERY_RESPONSE:
      return (initState = { ...action.payload?.data })
    default:
      return initState
  }
}

export default popularReducer
