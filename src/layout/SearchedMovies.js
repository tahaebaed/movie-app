import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import Btn from '../components/Btn';
import MovieCard from '../components/MovieCard';
import MoviesWrapper from './MoviesWrapper';

function SearchedMovies() {
  const searchResult = useSelector(state => state.search);
  const { id } = useParams();
  console.log(searchResult);
  return (
    <div className='container'>
      {searchResult === 'loading' ? (
        <p>loading</p>
      ) : searchResult.results.length === 0 ? (
        <h3>There is no Movie With that name</h3>
      ) : (
        <>
          <MoviesWrapper>
            {searchResult.results?.map(movie => (
              <MovieCard
                id={movie.id}
                imgSrc={movie.poster_path}
                rating={movie.vote_average}
                title={movie.title}
                key={movie.id}
              />
            ))}
          </MoviesWrapper>
        </>
      )}
    </div>
  );
}

export default SearchedMovies;
