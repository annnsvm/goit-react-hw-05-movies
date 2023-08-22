import React, { useState, useEffect } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { getMovie } from '../services/api';
import MovieForm from 'components/MovieForm/MovieForm';

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
  }, [searchParams]);

  const handleSubmit = query => {
    if (query === '') {
      return setSearchParams({});
    }
    setSearchParams({ query });
  };

  return (
    <main>
      <section>
        <h2>Search Movies:</h2>
        <MovieForm onSubmit={handleSubmit} />
        <ul>
          {movies.map(({ id, title, poster_path }) => (
            <li key={id}>
              <Link to={`/movies/${id}`} state={{ from: location }}>
                {title}
                <img
                  src={`https://image.tmdb.org/t/p/w200/${poster_path}`}
                  alt=""
                />
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
};

export default Movies;
