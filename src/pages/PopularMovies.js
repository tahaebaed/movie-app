import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import Btn from '../components/Btn';
import MovieCard from '../components/MovieCard';
import MoviesWrapper from '../layout/MoviesWrapper';
import SearchedMovies from '../layout/SearchedMovies';
import { popularMovieRequest } from '../store/popular-movies/actions';

function PopularMovies({ query }) {
  const { id } = useParams();
  const popular = useSelector(stat => stat.popular);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(popularMovieRequest(id));
  }, [dispatch, id, query]);
  return query !== '' ? (
    <SearchedMovies />
  ) : (
    <div className='container'>
      {popular === 'loading' ? (
        <p>loading</p>
      ) : (
        <>
          <MoviesWrapper>
            {popular?.results?.map(movie => (
              <MovieCard
                id={movie.id}
                imgSrc={movie.poster_path}
                rating={movie.vote_average}
                title={movie.title}
                key={movie.id}
              />
            ))}
          </MoviesWrapper>
          <div
            className={`d-flex justify-content-${
              id === `1` ? 'end' : 'between'
            } fixed-bottom container mb-2`}
          >
            {id > 1 && (
              <Link to={`/movie-app/popular/${+id - 1}`}>
                <Btn btnClassName='btn btn-dark'>Page {+id - 1}</Btn>
              </Link>
            )}
            <Link to={`/movie-app/popular/${+id + 1}`}>
              <Btn btnClassName='btn btn-dark'>Page {+id + 1}</Btn>
            </Link>
          </div>
        </>
      )}
    </div>
  );
}

export default PopularMovies;
