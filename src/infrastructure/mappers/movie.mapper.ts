import {
  MovieCredits,
  MovieDBCast,
  MovieDBMovie,
  Result,
} from '../interfaces/movie-db.responses';
import {FullMovie, Movie} from '../../core/entities/movie.entity';
import {Cast} from '../../core/entities/cast.entity';

export class MovieMapper {
  static fromMovieDBResultToEntity(result: Result): Movie {
    return {
      id: result.id,
      title: result.title,
      description: result.overview,
      releaseDate: new Date(result.release_date),
      rating: result.vote_average,
      poster: `https://image.tmdb.org/t/p/w500${result.poster_path}`,
      backdrop: `https://image.tmdb.org/t/p/w500${result.backdrop_path}`,
    };
  }

  static fromMovieDBToEntity(movie: MovieDBMovie): FullMovie {
    return {
      id: movie.id,
      title: movie.title,
      description: movie.overview,
      releaseDate: new Date(movie.release_date),
      rating: movie.vote_average,
      poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
      backdrop: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,
      genres: movie.genres.map(genre => genre.name),
      duration: movie.vote_average,
      budget: movie.budget,
      originalTitle: movie.original_title,
      productionCompanies: movie.production_companies.map(comp => comp.name),
    };
  }

  static fromMovieCastDBToEntity(movieCredits: MovieDBCast): Cast {
    return {
      id: movieCredits.id,
      name: movieCredits.name,
      character: movieCredits.character ?? 'No Character',
      avatar: movieCredits.profile_path
        ? `https://image.tmdb.org/t/p/w500${movieCredits.profile_path}`
        : 'https://i.stack.imgur.com/l60Hf.png',
    };
  }
}
