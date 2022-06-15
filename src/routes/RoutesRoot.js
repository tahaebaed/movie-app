import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from '../layout/NavBar';
import { Home, MovieInfo, PopularMovies } from './lazyLoading';

function RoutesRoot(props) {
  return (
    <React.Suspense fallback={<p>Loading..</p>}>
      <Routes>
        <Route path='/' element={<NavBar />} />
        <Route path='/movie-app' element={<Home />} exact />
        <Route
          path='/movie-app/popular/:id'
          element={<PopularMovies query={props.query} />}
        />
        <Route path='/movie-app/movie/:id' element={<MovieInfo />} />
        <Route path='*' element={<p> 404 page not found</p>} />
      </Routes>
    </React.Suspense>
  );
}

export default RoutesRoot;
