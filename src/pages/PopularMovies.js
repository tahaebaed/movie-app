import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MovieCard from '../components/MovieCard';
import MoviesWrapper from '../layout/MoviesWrapper';
import { popularMovieRequest } from '../store/popular-movies/actions';

function PopularMovies() {
  const popular = useSelector(stat => stat.popular);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(popularMovieRequest());
  }, []);
  return (
    <div className='container'>
      {popular === 'loading' ? (
        <p>loading</p>
      ) : (
        <MoviesWrapper>
          {popular?.results?.map(movie => (
            <MovieCard
              id={movie.id}
              imgSrc={movie.backdrop_path}
              rating={movie.vote_average}
              title={movie.title}
              key={movie.id}
            />
          ))}
        </MoviesWrapper>
      )}
    </div>
  );
}

export default PopularMovies;
