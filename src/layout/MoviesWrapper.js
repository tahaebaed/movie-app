import React from 'react';

function MoviesWrapper({ children }) {
  return (
    <div className='row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3 mt-5'>
      {children}
    </div>
  );
}

export default MoviesWrapper;
