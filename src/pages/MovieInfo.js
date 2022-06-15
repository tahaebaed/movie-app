import React, { useEffect } from 'react';
import ReactStars from 'react-rating-stars-component';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { handleMovieRequest } from '../store/movie/actions';
import {
  BsRecordCircleFill,
  BsArrowLeftShort,
  BsLink45Deg,
} from 'react-icons/bs';
import { FaImdb, FaPlay } from 'react-icons/fa';
import Btn from '../components/Btn';

function MovieInfo() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const movie = useSelector(state => state.movie);

  const navigate = useNavigate();
  useEffect(() => {
    dispatch(handleMovieRequest(id));
  }, [dispatch, id]);
  return movie && movie.movieInfo === 'loading' ? (
    <p>loading</p>
  ) : (
    movie?.movieInfo && (
      <>
        <div className='row row-cols-lg-2 row-cols-md-1 row-cols-1'>
          <div className='col'>
            <img
              className='movie-info-img rounded-3'
              src={`https://image.tmdb.org/t/p/w780${movie.movieInfo.backdrop_path}`}
              alt={movie.movieInfo.title}
            />
          </div>
          <div className='col text-start'>
            <h2 className='fw-lighter'>{movie.movieInfo.title}</h2>
            <h3 className='fs-5 fw-bold'>{movie.movieInfo.tagline}</h3>
            <div className='d-flex justify-content-between'>
              <div className='d-flex align-items-center'>
                <ReactStars
                  count={5}
                  value={movie.movieInfo.vote_average / 2}
                  size={24}
                  activeColor='#000'
                />
                <p className='ms-3 my-auto'>{movie.movieInfo.vote_average}</p>
              </div>
              <div className='movie-info-date'>
                {movie.movieInfo.spoken_languages.map(language =>
                  language.name.toUpperCase()
                )}
                /{movie.movieInfo.runtime} min/
                {movie.movieInfo.release_date.match(/\d+/)}
              </div>
            </div>
            <h2 className='mt-3 fs-5'> the genres</h2>
            <ul className='d-flex fs-6 p-0'>
              {movie.movieInfo.genres.map(g => (
                <li className='d-flex align-items-center mt-2' key={g.id}>
                  <BsRecordCircleFill className='ms-2' />
                  <p className='m-0 ms-2'>{g.name}</p>
                </li>
              ))}
            </ul>
            <h2 className='mt-3 fs-5'> THE SYNOPSIS</h2>
            <p className='fs-6 fw-lighter'>{movie.movieInfo.overview}</p>

            <h2 className='mt-3 fs-5'> THE CAST</h2>
            <div className='d-flex'>
              {movie.castInfo.cast
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
                href={movie.movieInfo.homepage}
                target='_blank'
                rel='noreferrer'
              >
                <Btn btnClassName='btn btn-outline-dark rounded-pill me-0'>
                  Website <BsLink45Deg />
                </Btn>
              </a>

              <a
                href={`https://www.imdb.com/title/${movie.movieInfo.imdb_id}/?ref_=hm_fanfav_tt_i_1_pd_fp1`}
                target='_blank'
                rel='noreferrer'
              >
                <Btn btnClassName='btn btn-outline-dark rounded-pill me-0'>
                  imdb <FaImdb />
                </Btn>
              </a>
              <a
                href={`https://www.imdb.com/title/${movie.movieInfo.imdb_id}/?ref_=hm_fanfav_tt_i_1_pd_fp1`}
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
  );
}

export default MovieInfo;