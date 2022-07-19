import React, { useContext } from 'react'
import { FormattedMessage, useIntl } from 'react-intl'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Navigate, useParams } from 'react-router-dom'
import Btn from '../components/Btn'
import MovieCard from '../components/MovieCard'
import { LocaleContext } from '../lang/LocalizationProvider'
import MoviesWrapper from '../layout/MoviesWrapper'
import {
  popularMovieAPIRequest,
  // popularMovieRequest,
} from '../store/popular-movies/actions'
import CallAPi from '../utilities/queryAPI'

const PopularMovies = ({ query }) => {
  const { id } = useParams()
  const { locale } = useContext(LocaleContext)
  const intl = useIntl()

  const popular = useSelector(stat => stat.popular)
  const dispatch = useDispatch()

  const { isFetching } = CallAPi({
    QueryName: 'popular',
    watchers: [id, locale],
    refetchOnWindowFocus: false,
    axios: true,
    method: 'GET',
    url: `movie/popular?api_key=6acbd1e77111f3ead9c9bba49d78ba9f&language=${locale}`,
    params: {
      page: id,
    },
    onSuccess: res => dispatch(popularMovieAPIRequest(res)),
  })

  return query !== '' ? (
    <Navigate to='/search/1' replace />
  ) : (
    <div className='container'>
      {isFetching || popular === intl.messages.loading ? (
        <p>
          <FormattedMessage id='loading' defaultMessage='loading' />
        </p>
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
                <Btn btnClassName='btn btn-dark'>
                  <FormattedMessage
                    id='paginationBtn'
                    defaultMessage='page {num}'
                    values={{ num: +id - 1 }}
                  />
                </Btn>
              </Link>
            )}
            {id < popular?.total_pages && (
              <Link to={`/popular/${+id + 1}`}>
                <Btn btnClassName='btn btn-dark'>
                  <FormattedMessage
                    id='paginationBtn'
                    defaultMessage='page {num}'
                    values={{ num: +id + 1 }}
                  />
                </Btn>
              </Link>
            )}
          </div>
        </>
      )}
    </div>
  )
}

export default PopularMovies
