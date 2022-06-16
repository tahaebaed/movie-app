import React from 'react'
import { BsSearch } from 'react-icons/bs'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import Btn from '../components/Btn'
import { RiPlayList2Fill } from 'react-icons/ri'

const NavBar = ({ query, setQuery }) => (
  <>
    <nav className='navbar navbar-expand-lg navbar-white bg-white container'>
      <div className='container-fluid'>
        <ul className='navbar-nav'>
          <li>
            <Link
              className='nav-item dropdown d-flex align-items-start flex-column text-decoration-none text-dark'
              to='/movie-app/popular/1'
            >
              <h3 className='fw-light'>POPULAR</h3>
              <p>Movies</p>
            </Link>
          </li>
        </ul>
        <div className='d-flex align-items-center w-50 justify-content-end'>
          <Link to='/movie-app/watchList/'>
            <Btn btnClassName='btn btn-outline-success me-2'>
              watchlist <RiPlayList2Fill />
            </Btn>
          </Link>
          <input
            type='text'
            value={query}
            className='input me-2 w-50 p-1'
            onChange={e => {
              setQuery(e.target.value)
            }}
            placeholder='Search...'
          />

          <Btn btnClassName='search-icon-container' btnType='submit'>
            <BsSearch className='text-white' />
          </Btn>
        </div>
      </div>
    </nav>
  </>
)

export default NavBar
