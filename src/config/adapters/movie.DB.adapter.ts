import { AxiosAdapter } from "./http/axios.adapter";

export const movieDBFetcher = new AxiosAdapter({
  baseUrl: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: 'ec6332e1d5e622c71d528f9c41cf6d55',
    language: 'es',
  },
});