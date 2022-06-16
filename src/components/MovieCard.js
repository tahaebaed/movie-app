import React from 'react'
import { BsHeart, BsHeartFill } from 'react-icons/bs'
import ReactStars from 'react-rating-stars-component'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import {
  handleAddToWatchList,
  handlerRemoveToWatchList,
} from '../store/watchList.js/actions'
import Btn from './Btn'

const MovieCard = ({ movie }) => {
  const watchList = useSelector(state => state.watchList)
  const dispatch = useDispatch()

  const filtered = watchList.filter(mov => mov.id === movie.id)

  return (
    <>
      <div className='d-flex flex-column justify-content-center  align-items-center col movie-card-hover-State position-relative'>
        <Link to={`/movie/${movie.id}`} className='text-decoration-none'>
          <div className='movie-card-container'>
            <img
              className='movie-card-img'
              src={`https://image.tmdb.org/t/p/w780${movie.poster_path}`}
              alt={movie.title}
            />
            {filtered?.length === 1 ? (
              <Btn
                btnClassName='bg-transparent border-0 favorite-btn'
                handleClick={() => {
                  dispatch(handlerRemoveToWatchList(movie.id))
                  toast.success(
                    `${movie.title} has been removed to your watchlist`
                  )
                }}
              >
                <BsHeartFill />
              </Btn>
            ) : (
              <Btn
                btnClassName='bg-transparent border-0 favorite-btn'
                handleClick={() => {
                  dispatch(handleAddToWatchList(movie))
                  toast.success(
                    `${movie.title} has been added to your watchlist`
                  )
                }}
              >
                <BsHeart />
              </Btn>
            )}
          </div>
          <div className='title-rate-container'>
            <h6 className='movie-card-title'>{movie.title}</h6>
            <ReactStars
              count={5}
              classNames='m-auto'
              value={movie.vote_average / 2}
              size={24}
              isHalf
              activeColor='#000'
            />
          </div>
        </Link>
      </div>
    </>
  )
}

export default MovieCard
