import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Navigate, useParams } from 'react-router-dom'
import Btn from '../components/Btn'
import MovieCard from '../components/MovieCard'
import MoviesWrapper from '../layout/MoviesWrapper'
import { popularMovieRequest } from '../store/popular-movies/actions'

const PopularMovies = ({ query }) => {
  const { id } = useParams()
  const popular = useSelector(stat => stat.popular)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(popularMovieRequest(id))
  }, [dispatch, id, query])
  return query !== '' ? (
    <Navigate to='/search/1' replace />
  ) : (
    <div className='container'>
      {popular === 'loading' ? (
        <p>loading</p>
      ) : (
        <>
          <MoviesWrapper>
            {popular?.results?.map(movie => (
              <MovieCard movie={movie} key={movie.id} />
            ))}
          </MoviesWrapper>
          <div
            className={`d-flex justify-content-${
              id === `1` ? 'end' : 'between'
            } fixed-bottom container mb-2`}
          >
            {id > 1 && (
              <Link to={`/popular/${+id - 1}`}>
                <Btn btnClassName='btn btn-dark'>Page {+id - 1}</Btn>
              </Link>
            )}
            <Link to={`/popular/${+id + 1}`}>
              <Btn btnClassName='btn btn-dark'>Page {+id + 1}</Btn>
            </Link>
          </div>
        </>
      )}
    </div>
  )
}

export default PopularMovies
