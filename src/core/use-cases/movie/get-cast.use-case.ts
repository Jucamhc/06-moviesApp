import {HttpAdapter} from '../../../config/adapters/http/http.adapter';
import {MovieCredits} from '../../../infrastructure/interfaces/movie-db.responses';
import {MovieMapper} from '../../../infrastructure/mappers/movie.mapper';
import {Cast} from '../../entities/cast.entity';

export const getMovieCastUseCase = async (
  fetcher: HttpAdapter,
  movieId: number,
): Promise<Cast[]> => {
  try {
    const {cast} = await fetcher.get<MovieCredits>(`/${movieId}/credits`);
    const actors = cast.map(MovieMapper.fromMovieCastDBToEntity);
    return actors;
  } catch (error) {
    throw new Error(`Cannot get movie cast ${movieId}`);
  }
};
