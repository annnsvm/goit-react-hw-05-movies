import { useState, useEffect } from 'react';
import { getTrading } from '../services/api';
import MovieList from 'components/MovieLIst/MovieList';

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
      <h2>Trending movies:</h2>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Sorry, we couldn't fetch trending images.Try again later</div>
      ) : (
        <MovieList trendMovies={trendMovies} />
      )}
    </>
  );
};

export default Home;
