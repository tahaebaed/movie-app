import * as TYPES from './types'

const currentList = JSON.parse(localStorage.getItem('watchList'))

function watchListReducer(initState = currentList || [], action) {
  switch (action.type) {
    case TYPES.ADD_TO_WATCHLIST:
      initState = [...initState, action.movie]
      localStorage.setItem('watchList', JSON.stringify(initState))
      return initState
    case TYPES.REMOVE_FROM_WATCHLIST:
      const newWatchlist = initState.filter(movie => movie.id !== action.id)
      initState = [...newWatchlist]
      localStorage.setItem('watchList', JSON.stringify(initState))
      return initState
    default:
      return initState
  }
}

export default watchListReducer
