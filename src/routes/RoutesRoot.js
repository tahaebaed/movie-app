import React, { useDeferredValue } from 'react'
import { Routes, Route } from 'react-router-dom'
import SearchedMovies from '../layout/SearchedMovies'
import { Home, MovieInfo, PopularMovies, WatchList } from './lazyLoading'

const RoutesRoot = props => {
  const query = useDeferredValue(props.query)
  return (
    <React.Suspense fallback={<p>Loading..</p>}>
      <Routes>
        <Route path='/' element={<Home query={query} />} exact />

        <Route path='/popular/:id' element={<PopularMovies query={query} />} />

        <Route path='/search/:id' element={<SearchedMovies query={query} />} />

        <Route path='/movie/:id' element={<MovieInfo />} />
        <Route path='/watchList/' element={<WatchList />} />
        <Route path='*' element={<p> 404 page not found</p>} />
      </Routes>
    </React.Suspense>
  )
}

export default RoutesRoot
