import { useState, useEffect } from 'react';
import { getTrading } from '../services/api';
import MovieList from 'components/MovieLIst/MovieList';
import Loader from 'components/Loader/Loader';

const Home = () => {
  const [trendMovies, setTrendMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getTradingMovies = async () => {
      try {
        setError(false);
        setLoading(true);
        const { results } = await getTrading();
        setTrendMovies(results);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    getTradingMovies();
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <div>Sorry, we couldn't fetch trending images.Try again later</div>
      ) : (
        <MovieList trendMovies={trendMovies} />
      )}
    </>
  );
};

export default Home;
