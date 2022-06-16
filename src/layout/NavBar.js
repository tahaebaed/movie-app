import React from 'react'
import { BsSearch } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import Btn from '../components/Btn'
import { RiPlayList2Fill } from 'react-icons/ri'

const NavBar = ({ query, setQuery }) => (
  <>
    <nav className='navbar navbar-expand-lg navbar-light bg-light container'>
      <div className='container-fluid'>
        <Link
          className='nav-item dropdown d-flex align-items-start flex-column text-decoration-none text-dark navbar-brand'
          to='/popular/1'
        >
          <h3 className='fw-light'>POPULAR</h3>
          <p>Movies</p>
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarScroll'
          aria-controls='navbarScroll'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div
          className='collapse navbar-collapse justify-content-end'
          id='navbarScroll'
        >
          <ul className='navbar-nav me-0 my-2 my-lg-0 navbar-nav-scroll'>
            <li className='nav-item '>
              <Link to='/watchList/' className='navbar-link btn-hover-state'>
                <Btn btnClassName='btn text-success me-2 '>
                  watchlist <RiPlayList2Fill />
                </Btn>
              </Link>
            </li>
          </ul>

          <form class='d-flex'>
            <input
              type='search'
              placeholder='Search'
              aria-label='Search'
              value={query}
              className='form-control me-2'
              onChange={e => {
                setQuery(e.target.value)
              }}
            />

            <Btn btnClassName='search-icon-container' btnType='submit'>
              <BsSearch className='text-white' />
            </Btn>
          </form>
        </div>
      </div>
    </nav>
  </>
)

export default NavBar
