import * as TYPES from './types'

export const handleAddToWatchList = movie => ({
  type: TYPES.ADD_TO_WATCHLIST,
  movie,
})

export const handlerRemoveToWatchList = id => ({
  type: TYPES.REMOVE_FROM_WATCHLIST,
  id,
})
