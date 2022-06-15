import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home, MovieInfo, PopularMovies } from './lazyLoading';

function RoutesRoot() {
  return (
    <React.Suspense fallback={<p>Loading..</p>}>
      <Routes>
        <Route path='/movie-app' element={<Home />} exact />
        <Route path='/movie-app/popular' element={<PopularMovies />} />
        <Route path='/movie-app/movie/:id' element={<MovieInfo />} />
        <Route path='*' element={<p> 404 page not found</p>} />
      </Routes>
    </React.Suspense>
  );
}

export default RoutesRoot;
