import { Link } from 'react-router-dom';
import {
  StyledMovieList,
  MovieItem,
  MovieListTitle,
  Poster,
  Title,
} from './MovieList.styled';

const MovieList = ({ trendMovies }) => {
  return (
    <section>
      <MovieListTitle>Trending movies</MovieListTitle>
      <StyledMovieList>
        {trendMovies.map(({ id, title, poster_path }) => (
          <MovieItem key={id}>
            <Link to={`/movies/${id}`}>
              <Poster
                src={`https://image.tmdb.org/t/p/w200/${poster_path}`}
                alt=""
              />
              <Title>{title}</Title>
            </Link>
          </MovieItem>
        ))}
      </StyledMovieList>
    </section>
  );
};

export default MovieList;
