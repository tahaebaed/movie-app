import React, { useEffect, useState, useTransition } from 'react';
import { BsSearch } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import Btn from '../components/Btn';
import { popularMovieRequest } from '../store/popular-movies/actions';
import { handleSearchRequest } from '../store/search/actions';

function NavBar({ query, setQuery }) {
  const [search, setSearch] = useState(false);

  const dispatch = useDispatch();
  return (
    <>
      <nav className='navbar navbar-expand-lg navbar-white bg-white container'>
        <div className='container-fluid'>
          <ul className='navbar-nav'>
            <li>
              <Link
                className='nav-item dropdown d-flex align-items-start flex-column text-decoration-none text-dark'
                to='/movie-app/popular/1'
              >
                <h3 className='fw-light'>Popular</h3>
                <p>Movies</p>
              </Link>
            </li>
          </ul>
          <div className='d-flex align-items-center'>
            {search && (
              <input
                type='text'
                value={query}
                className='input me-2'
                onChange={e => {
                  setQuery(e.target.value);

                  dispatch(handleSearchRequest(e.target.value));
                }}
                placeholder='hello'
              />
            )}
            <Btn
              btnClassName='search-icon-container'
              handleClick={() => setSearch(s => !s)}
            >
              <BsSearch className='text-white' />
            </Btn>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
