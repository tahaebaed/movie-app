import React from 'react'
import { Link } from 'react-router-dom'
import { FormattedMessage } from 'react-intl'
import Btn from '../components/Btn'
import SearchedMovies from '../layout/SearchedMovies'

const Home = ({ query }) =>
  query !== '' ? (
    <SearchedMovies />
  ) : (
    <div>
      <h1 className='mt-5'>
        <FormattedMessage
          id='welcomeMessage'
          defaultMessage='Welcome To Our Movie Website'
        />
      </h1>
      <Link to='/popular/1' className='text-decoration-none'>
        <Btn btnClassName='btn btn-primary'>
          <FormattedMessage id='popularHomeBtn' defaultMessage='start' />
        </Btn>
      </Link>
    </div>
  )

export default Home
