import React, { useContext } from 'react'
import { FormattedMessage, useIntl } from 'react-intl'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Navigate, useParams } from 'react-router-dom'

import Btn from '../components/Btn'
import MovieCard from '../components/MovieCard'
import { LocaleContext } from '../lang/LocalizationProvider'
import { handleSearchQueryRequest } from '../store/search/actions'
import CallAPi from '../utilities/queryAPI'
import MoviesWrapper from './MoviesWrapper'

const SearchedMovies = ({ query }) => {
  const { search, popular } = useSelector(state => state)
  const { id } = useParams()
  const { locale } = useContext(LocaleContext)
  const dispatch = useDispatch()
  const intl = useIntl()

  const { isFetching } = CallAPi({
    QueryName: 'search',
    watchers: [id, query],
    refetchOnWindowFocus: false,
    axios: true,
    method: 'GET',
    url: `search/movie?api_key=6acbd1e77111f3ead9c9bba49d78ba9f`,
    params: {
      language: locale,
      query,
      page: id,
    },
    onSuccess: res => dispatch(handleSearchQueryRequest(res)),
  })

  return query === '' ? (
    <Navigate to={`/popular/${popular?.page || 1}`} replace />
  ) : (
    <div className='container'>
      {isFetching || search === intl.messages.loading ? (
        <FormattedMessage id='loading' defaultMessage='loading' />
      ) : search?.results?.length === 0 ? (
        <h3>
          <FormattedMessage
            id='searchResult'
            defaultMessage='no result'
            values={{ id }}
          />
        </h3>
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
            <Btn btnClassName='btn btn-dark'>
              <FormattedMessage
                id='paginationBtn'
                defaultMessage='page {num}'
                values={{ num: +id - 1 }}
              />
            </Btn>
          </Link>
        )}
        {id <= search?.total_pages && (
          <Link to={`/search/${+id + 1}`}>
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
    </div>
  )
}

export default SearchedMovies
