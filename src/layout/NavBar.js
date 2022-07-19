import React, { useContext } from 'react'
import { BsSearch } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import Btn from '../components/Btn'
import { RiPlayList2Fill } from 'react-icons/ri'
import { LocaleContext } from '../lang/LocalizationProvider'
import { useIntl, FormattedMessage } from 'react-intl'

const NavBar = ({ query, setQuery }) => {
  const { locale, setLocale } = useContext(LocaleContext)
  const intl = useIntl()
  return (
    <header className='bg-light'>
      <nav className='navbar navbar-expand-lg navbar-light bg-light container'>
        <div className='container-fluid'>
          <Btn btnClassName='btn btn-text' handleClick={() => setQuery('')}>
            <Link
              className='nav-item dropdown d-flex align-items-start flex-column text-decoration-none text-dark navbar-brand'
              to='/popular/1'
            >
              <h3 className='fw-light'>
                <FormattedMessage id='popularNav' defaultMessage='popular' />
              </h3>
              <p>
                <FormattedMessage id='moviesWord' defaultMessage='Movies' />
              </p>
            </Link>
          </Btn>
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
            <ul className='navbar-nav me-0 my-2 my-lg-0 navbar-nav-scroll align-items-center'>
              <li className='nav-item '>
                <Btn
                  btnClassName='btn text-success me-2 '
                  handleClick={() => setQuery('')}
                >
                  <Link
                    to='/watchList/'
                    className='navbar-link btn-hover-state text-decoration-none text-success'
                  >
                    <FormattedMessage
                      id='watchList'
                      defaultMessage='watchList'
                    />
                    <RiPlayList2Fill />
                  </Link>
                </Btn>
              </li>
              <li className='nav-item me-3'>
                <select
                  className='form-select form-select-sm py-2'
                  aria-label='.form-select-sm example'
                  onChange={e => {
                    setLocale(e.target.value)
                    localStorage.setItem('lang', e.target.value)
                  }}
                  defaultValue={locale}
                >
                  <option value='ar'>العربيه</option>
                  <option value='en'>english</option>
                  <option value='fr'>french</option>
                </select>
              </li>
            </ul>

            <form className='d-flex position-relative'>
              <input
                type='search'
                placeholder={intl.messages.search}
                aria-label='Search'
                value={query}
                className='form-control me-2'
                onChange={e => {
                  setQuery(e.target.value)
                }}
              />

              <Btn
                btnClassName={`search-icon-container${
                  locale === 'ar' ? '-ar' : ''
                } btn-sm position-absolute`}
                btnType='submit'
              >
                <BsSearch className='text-secondary' />
              </Btn>
            </form>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default NavBar
