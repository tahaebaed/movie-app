import React from 'react'
import { BsLink45Deg, BsTrash } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { FormattedMessage } from 'react-intl'
import Btn from '../components/Btn'
import { handlerRemoveToWatchList } from '../store/watchList.js/actions'

const WatchList = () => {
  const watchList = useSelector(stat => stat.watchList)
  const dispatch = useDispatch()

  return (
    <table class='table'>
      <thead>
        <tr>
          <th scope='col'>
            <FormattedMessage id='watchlist.ID' defaultMessage='ID' />
          </th>
          <th scope='col'>
            <FormattedMessage id='watchlist.TITLE' defaultMessage='TITLE' />
          </th>
          <th scope='col'>
            <FormattedMessage id='watchlist.RATING' defaultMessage='RATING' />
          </th>
          <th scope='col'>
            <FormattedMessage id='watchlist.WEBSITE' defaultMessage='WEBSITE' />
          </th>
          <th scope='col'>
            <FormattedMessage id='watchlist.REMOVE' defaultMessage='REMOVE' />
          </th>
        </tr>
      </thead>
      <tbody>
        {watchList.length < 1 ? (
          <td colSpan={5} className='text-center'>
            <FormattedMessage
              id='watchlist.EMPTY'
              defaultMessage='There is no Movies in your watchlist'
            />
          </td>
        ) : (
          watchList.map(movie => (
            <tr>
              <th scope='row'>{movie.id}</th>
              <td>
                <Link
                  to={`/movie/${movie.id}`}
                  className='text-decoration-none'
                >
                  {movie.title}
                </Link>
              </td>
              <td>{movie.vote_average}</td>
              <td>
                <a href={movie.homepage} target='_blank' rel='noreferrer'>
                  <Btn btnClassName='btn btn-outline-dark rounded-pill me-0'>
                    <BsLink45Deg />
                  </Btn>
                </a>
              </td>
              <td>
                <Btn
                  btnClassName='btn btn-outline-danger rounded-pill me-0'
                  handleClick={() =>
                    dispatch(handlerRemoveToWatchList(movie.id))
                  }
                >
                  <BsTrash />
                </Btn>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  )
}

export default WatchList
