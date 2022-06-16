import React, { useDeferredValue, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Navigate, useParams } from 'react-router-dom'
import Btn from '../components/Btn'
import MovieCard from '../components/MovieCard'
import { handleSearchRequest } from '../store/search/actions'
import MoviesWrapper from './MoviesWrapper'

const SearchedMovies = ({ query }) => {
  const { search, popular } = useSelector(state => state)
  const { id } = useParams()

  const noMoreResultState =
    id < 1 ? 'Movie With that name' : 'more movies with that name'

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(handleSearchRequest(id, query))
  }, [dispatch, id, query])
  return query === '' ? (
    <Navigate to={`/movie-app/popular/${popular?.page || 1}`} replace />
  ) : (
    <div className='container'>
      {search === 'loading' ? (
        <p>loading</p>
      ) : search.results.length === 0 ? (
        <h3>There is no {noMoreResultState}</h3>
      ) : (
        <>
          <MoviesWrapper>
            {search.results?.map(movie => (
              <MovieCard movie={movie} key={movie.id} />
            ))}
          </MoviesWrapper>
        </>
      )}
      <div
        className={`d-flex justify-content-${
          id === `1` ? 'end' : 'between'
        } fixed-bottom container mb-2`}
      >
        {id > 1 && (
          <Link to={`/movie-app/search/${+id - 1}`}>
            <Btn btnClassName='btn btn-dark'>Page {+id - 1}</Btn>
          </Link>
        )}
        {search.results?.length > 0 && (
          <Link to={`/movie-app/search/${+id + 1}`}>
            <Btn btnClassName='btn btn-dark'>Page {+id + 1}</Btn>
          </Link>
        )}
      </div>
    </div>
  )
}

export default SearchedMovies
