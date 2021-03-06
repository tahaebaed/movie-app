import { moviesInstance } from '../../utilities/movieInstance';

export const fetchPopularData = page => {
  return moviesInstance.request({
    method: 'GET',
    url: `movie/popular?api_key=6acbd1e77111f3ead9c9bba49d78ba9f`,
    params: {
      page,
    },
  });
};
