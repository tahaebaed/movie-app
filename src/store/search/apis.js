import { moviesInstance } from '../../utilities/movieInstance'

export const fetchSearchData = (query, page) => {
  return moviesInstance.request({
    method: 'GET',
    url: 'search/movie?api_key=6acbd1e77111f3ead9c9bba49d78ba9f',
    params: {
      query,
      page,
    },
  })
}
