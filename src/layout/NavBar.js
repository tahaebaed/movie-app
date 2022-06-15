import React from 'react';
import { BsSearch } from 'react-icons/bs';
import Btn from '../components/Btn';

function NavBar() {
  return (
    <nav className='navbar navbar-expand-lg navbar-white bg-white'>
      <div className='container-fluid'>
        <ul className='navbar-nav'>
          <li className='nav-item dropdown d-flex align-items-start flex-column'>
            <h3 className='fw-light'>Popular</h3>
            <p>Movies</p>
          </li>
        </ul>
        <Btn btnClassName='search-icon-container'>
          <BsSearch className='text-white' />
        </Btn>
      </div>
    </nav>
  );
}

export default NavBar;
