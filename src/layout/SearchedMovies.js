import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Navigate, useParams } from 'react-router-dom'
import Btn from '../components/Btn'
import MovieCard from '../components/MovieCard'
import {
  handleSearchQueryRequest,
  // handleSearchRequest,
} from '../store/search/actions'
import CallAPi from '../utilities/queryAPI'
import MoviesWrapper from './MoviesWrapper'

const SearchedMovies = ({ query }) => {
  const { search, popular } = useSelector(state => state)
  const { id } = useParams()
  const dispatch = useDispatch()

  const { isFetching } = CallAPi({
    QueryName: 'search',
    watchers: [id, query],
    refetchOnWindowFocus: false,
    axios: true,
    method: 'GET',
    url: 'search/movie?api_key=6acbd1e77111f3ead9c9bba49d78ba9f',
    params: {
      query,
      page: id,
    },
    onSuccess: res => dispatch(handleSearchQueryRequest(res)),
  })
  const noMoreResultState =
    id < 1 ? 'Movie With that name' : 'more movies with that name'

  return query === '' ? (
    <Navigate to={`/popular/${popular?.page || 1}`} replace />
  ) : (
    <div className='container'>
      {isFetching || search === 'loading' ? (
        <p>loading</p>
      ) : search?.results?.length === 0 ? (
        <h3>There is no {noMoreResultState}</h3>
      ) : (
        <>
          <MoviesWrapper>
            {search?.results?.map(movie => (
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
          <Link to={`/search/${+id - 1}`}>
            <Btn btnClassName='btn btn-dark'>Page {+id - 1}</Btn>
          </Link>
        )}
        {id <= search?.total_pages && (
          <Link to={`/search/${+id + 1}`}>
            <Btn btnClassName='btn btn-dark'>Page {+id + 1}</Btn>
          </Link>
        )}
      </div>
    </div>
  )
}

export default SearchedMovies
