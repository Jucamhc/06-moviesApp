import {HttpAdapter} from '../../../config/adapters/http/http.adapter';
import {MovieDBMoviesResponse} from '../../../infrastructure/interfaces/movie-db.responses';
import {MovieMapper} from '../../../infrastructure/mappers/movie.mapper';
import {Movie} from '../../entities/movie.entity';

export const moviesUpComingUseCase = async (
  fetcher: HttpAdapter,
): Promise<Movie[]> => {
  try {
    const upComming = await fetcher.get<MovieDBMoviesResponse>('/upcoming');
    return upComming.results.map(MovieMapper.fromMovieDBResultToEntity);
  } catch (error) {
    console.log(error);
    throw new Error('Error fetching movies - UpComing');
  }
};
