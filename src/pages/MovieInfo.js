import React from 'react'
import ReactStars from 'react-rating-stars-component'
import { useNavigate, useParams } from 'react-router-dom'
import {
  BsRecordCircleFill,
  BsArrowLeftShort,
  BsLink45Deg,
  BsHeart,
  BsHeartFill,
} from 'react-icons/bs'
import { FaImdb, FaPlay } from 'react-icons/fa'
import Btn from '../components/Btn'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import {
  handleAddToWatchList,
  handlerRemoveToWatchList,
} from '../store/watchList.js/actions'
import CallAPi from '../utilities/queryAPI'

const MovieInfo = () => {
  const { id } = useParams()

  const { data: movieDetails, isLoading: movieDetailsLoading } = CallAPi({
    QueryName: 'movie info',
    watchers: [id],
    refetchOnWindowFocus: false,
    axios: true,
    method: 'GET',
    url: `movie/${id}?api_key=6acbd1e77111f3ead9c9bba49d78ba9f`,
  })

  const { data: castDetails } = CallAPi({
    QueryName: 'cast info',
    watchers: [id],
    refetchOnWindowFocus: false,
    axios: true,
    method: 'GET',
    url: `movie/${id}/credits?api_key=6acbd1e77111f3ead9c9bba49d78ba9f`,
  })

  const navigate = useNavigate()
  const watchList = useSelector(state => state.watchList)
  const dispatch = useDispatch()

  const filtered = watchList.filter(mov => mov.id === movieDetails?.data.id)

  return movieDetailsLoading ? (
    <p>loading</p>
  ) : (
    <>
      <div className='row row-cols-lg-2 row-cols-md-1 row-cols-1 mt-3'>
        <div className='col'>
          <img
            className='movie-info-img rounded-3 mb-3'
            src={`https://image.tmdb.org/t/p/w780${movieDetails.data.backdrop_path}`}
            alt={movieDetails.data.title}
          />
        </div>
        <div className='col text-start'>
          <div className='d-flex justify-content-between my-3 align-items-center'>
            <h2 className='fw-lighter'>{movieDetails.data.title}</h2>
            {filtered?.length === 1 ? (
              <Btn
                btnClassName='bg-transparent border-0 info-favorite text-danger'
                handleClick={() => {
                  dispatch(handlerRemoveToWatchList(movieDetails.data.id))
                  toast.success(
                    `${movieDetails.data.title} has been removed to your watchlist`
                  )
                }}
              >
                remove from watchlist <BsHeartFill />
              </Btn>
            ) : (
              <Btn
                btnClassName='bg-transparent border-0 text-danger'
                handleClick={() => {
                  dispatch(handleAddToWatchList(movieDetails.data))
                  toast.success(
                    `${movieDetails.data.title} has been added to your watchlist`
                  )
                }}
              >
                Add to watchlist <BsHeart />
              </Btn>
            )}
          </div>
          <h3 className='fs-5 fw-bold'>{movieDetails.data.tagline}</h3>
          <div className='d-flex justify-content-between'>
            <div className='d-flex align-items-center flex-row'>
              <ReactStars
                count={5}
                value={movieDetails.data.vote_average / 2}
                size={24}
                activeColor='#000'
              />
              <p className='ms-3 my-auto'>{movieDetails.data.vote_average}</p>
            </div>

            <div className='movie-info-date d-flex align-items-center'>
              {movieDetails.data?.spoken_languages?.map(
                language => `${language.name.toUpperCase()}/`
              )}
              {movieDetails.data.runtime} min/
              {movieDetails.data.release_date.match(/\d+/)}
            </div>
          </div>
          <h2 className='mt-3 fs-5'> the genres</h2>
          <ul className='d-flex fs-6 p-0'>
            {movieDetails.data.genres.map(g => (
              <li className='d-flex align-items-center mt-2' key={g.id}>
                <BsRecordCircleFill className='ms-2' />
                <p className='m-0 ms-2'>{g.name}</p>
              </li>
            ))}
          </ul>
          <h2 className='mt-3 fs-5'> THE SYNOPSIS</h2>
          <p className='fs-6 fw-lighter'>{movieDetails.data.overview}</p>

          <h2 className='mt-3 fs-5'> THE CAST</h2>
          <div className='d-flex'>
            {castDetails &&
              castDetails.data.cast
                .filter((c, i) => i < 5)
                .map(c => (
                  <img
                    className='movie-cast-info-img me-4'
                    src={`https://image.tmdb.org/t/p/w780${c.profile_path}`}
                    alt={c.name}
                    key={c.id}
                  />
                ))}
          </div>
          <div className='d-flex justify-content-between my-4'>
            <a
              href={movieDetails.data.homepage}
              target='_blank'
              rel='noreferrer'
            >
              <Btn btnClassName='btn btn-outline-dark rounded-pill me-0'>
                Website <BsLink45Deg />
              </Btn>
            </a>

            <a
              href={`https://www.imdb.com/title/${movieDetails.data.imdb_id}/?ref_=hm_fanfav_tt_i_1_pd_fp1`}
              target='_blank'
              rel='noreferrer'
            >
              <Btn btnClassName='btn btn-outline-dark rounded-pill me-0'>
                imdb <FaImdb />
              </Btn>
            </a>
            <a
              href={`https://www.imdb.com/title/${movieDetails.data.imdb_id}/?ref_=hm_fanfav_tt_i_1_pd_fp1`}
              target='_blank'
              rel='noreferrer'
            >
              <Btn btnClassName='btn btn-outline-dark rounded-pill me-0'>
                Trailer <FaPlay />
              </Btn>
            </a>
            <Btn
              btnClassName='btn btn-dark rounded-pill me-0'
              handleClick={() => navigate(-1)}
            >
              <BsArrowLeftShort /> Back
            </Btn>
          </div>
        </div>
      </div>
    </>
  )
}

export default MovieInfo
