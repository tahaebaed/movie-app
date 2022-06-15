import React from 'react';
import { BsSearch } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Btn from '../components/Btn';
import { handleSearchRequest } from '../store/search/actions';

function NavBar({ query, setQuery }) {
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
          <div className='d-flex align-items-center w-50 justify-content-end'>
            <input
              type='text'
              value={query}
              className='input me-2 w-75'
              onChange={e => {
                setQuery(e.target.value);

                dispatch(handleSearchRequest(e.target.value));
              }}
              placeholder='Put something to search'
            />
            <Btn btnClassName='search-icon-container' btnType='submit'>
              <BsSearch className='text-white' />
            </Btn>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
