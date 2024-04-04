import {AxiosAdapter} from './http/axios.adapter';
import { THE_MOVIE_DB_KEY } from '@env';

export const movieDBFetcher = new AxiosAdapter({
  baseUrl: 'https://api.themoviedb.org/3/movie',
  params: {
    /* api_key: 'ec6332e1d5e622c71d528f9c41cf6d55', */
    api_key: THE_MOVIE_DB_KEY,
    language: 'es',
  },
});
