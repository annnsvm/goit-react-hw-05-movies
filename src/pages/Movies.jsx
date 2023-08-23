import React, { useState, useEffect } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { getMovie } from '../services/api';
import MovieForm from 'components/MovieForm/MovieForm';
import {
  MovieListTitle,
  StyledMovieList,
  MovieItem,
  Poster,
  Title,
} from '../components/MovieLIst/MovieList.styled';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    const getMoviesByName = async () => {
      try {
        const { results } = await getMovie(query);
        if (results) {
          if (results.length === 0) {
            console.log('no results');
          } else {
            setMovies(results);
          }
        }
      } catch (error) {
        console.log(error);
        setMovies([]);
      }
    };
    getMoviesByName();
  }, [searchParams, query]);

  const handleSubmit = query => {
    if (query === '') {
      return setSearchParams({});
    }
    setSearchParams({ query });
  };

  return (
    <section>
      <MovieListTitle>Search Movies</MovieListTitle>
      <MovieForm onSubmit={handleSubmit} />
      <StyledMovieList>
        {movies.map(({ id, title, poster_path }) => (
          <MovieItem key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              <Poster
                src={
                  poster_path
                    ? `https://image.tmdb.org/t/p/w200/${poster_path}`
                    : 'https://via.placeholder.com/400x600.png?text=Poster+Not+Available'
                }
                alt=""
              />
              <Title> {title}</Title>
            </Link>
          </MovieItem>
        ))}
      </StyledMovieList>
    </section>
  );
};

export default Movies;
