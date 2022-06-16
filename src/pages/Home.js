import React from 'react'
import { Link } from 'react-router-dom'
import Btn from '../components/Btn'
import SearchedMovies from '../layout/SearchedMovies'

const Home = ({ query }) =>
  query !== '' ? (
    <SearchedMovies />
  ) : (
    <div>
      <h1 className='mt-5'>Welcome To Our Movie Website</h1>
      <Link to='/movie-app/popular/1' className='text-decoration-none'>
        <Btn btnClassName='btn btn-primary'>Popular</Btn>
      </Link>
    </div>
  )

export default Home
