import {useEffect, useState} from 'react';
import {Movie} from '../../core/entities/movie.entity';

import * as UseCases from '../../core/use-cases';
import {movieDBFetcher} from '../../config/adapters/movie.DB.adapter';

export const useMovies = () => {
  const [isLoading, setIsLoading] = useState(true);

  const [nowPlaying, setNowPlaying] = useState<Movie[]>([]);
  const [popular, setPopular] = useState<Movie[]>([]);
  const [topRated, setTopRated] = useState<Movie[]>([]);
  const [upComing, setUpComing] = useState<Movie[]>([]);

  useEffect(() => {
    initalLoad();
  }, []);

  const initalLoad = async () => {
    const nowPlayingPromise = UseCases.moviesNowPlayingUseCase(movieDBFetcher);
    const popularPromise = UseCases.moviesPopularUseCase(movieDBFetcher);
    const topRatedPromise = UseCases.moviesTopRatedUseCase(movieDBFetcher);
    const upComingPromise = UseCases.moviesUpComingUseCase(movieDBFetcher);

    const [nowPlayingMovies, popularMovies, topRatedMovies, upComingMovies] =
      await Promise.all([
        nowPlayingPromise,
        popularPromise,
        topRatedPromise,
        upComingPromise,
      ]);

    setNowPlaying(nowPlayingMovies);
    setPopular(popularMovies);
    setTopRated(topRatedMovies);
    setUpComing(upComingMovies);

    setIsLoading(false);

    console.log(nowPlaying, popular, topRated, upComing);
  };

  return {
    isLoading,
    nowPlaying,
    popular,
    topRated,
    upComing,
  };
};
