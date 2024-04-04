import {useEffect, useState} from 'react';
import {movieDBFetcher} from '../../config/adapters/movie.DB.adapter';
import * as UseCases from '../../core/use-cases';
import {FullMovie} from '../../core/entities/movie.entity';
import {Cast} from '../../core/entities/cast.entity';

export const useMovie = (movieId: number) => {
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setmovie] = useState<FullMovie>();
  const [cast, setCast] = useState<Cast[]>();

  useEffect(() => {
    loadMovie();
  }, [movieId]);

  const loadMovie = async () => {
    setIsLoading(true);
    const fullMoviePromise = UseCases.getMovieByIdUseCase(
      movieDBFetcher,
      movieId,
    );
    const castPromise = UseCases.getMovieCastUseCase(movieDBFetcher, movieId);

    const [fullMovie, castResponse] = await Promise.all([fullMoviePromise, castPromise]);

    setmovie(fullMovie);
    setCast(castResponse);
    setIsLoading(false);
  };

  return {
    isLoading,
    movie,
    cast,
  };
};
