import { moviesInstance } from '../../utilities/movieInstance';

export const fetchMovieInfo = id => {
  return moviesInstance.request({
    method: 'GET',
    url: `movie/${id}?api_key=6acbd1e77111f3ead9c9bba49d78ba9f`,
  });
};

export const fetchMovieCastInfo = id => {
  return moviesInstance.request({
    method: 'GET',
    url: `movie/${id}/credits?api_key=6acbd1e77111f3ead9c9bba49d78ba9f`,
  });
};
