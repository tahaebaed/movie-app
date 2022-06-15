import axios from 'axios';

export const moviesInstance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
});
