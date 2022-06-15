import React from 'react';
import ReactStars from 'react-rating-stars-component';
import { Link } from 'react-router-dom';

function MovieCard({ id, title, imgSrc, rating }) {
  return (
    <>
      <div className='d-flex flex-column justify-content-center align-items-center col'>
        <Link to={`/movie-app/movie/${id}`} className='text-decoration-none'>
          <div className='movie-card-container'>
            <img
              className='movie-card-img rounded-3'
              src={`https://image.tmdb.org/t/p/w780${imgSrc}`}
              alt={title}
            />
          </div>
          <h6 className='movie-card-title'>{title} </h6>
        </Link>
        <ReactStars count={5} value={rating / 2} size={24} activeColor='#000' />
        ,
      </div>
    </>
  );
}

export default MovieCard;
