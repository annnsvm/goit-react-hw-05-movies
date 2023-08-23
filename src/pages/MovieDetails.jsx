import { Outlet, useParams, Link, useLocation } from 'react-router-dom';
import React, { useState, useEffect, useRef, Suspense } from 'react';
import { getDetails } from '../services/api';
import MovieCard from 'components/MovieCard/MovieCard';
import { Button } from './MovieDetails.styled';

const MovieDetails = () => {
  const [details, setDetails] = useState({});
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');

  // console.log(backLinkLocationRef);

  useEffect(() => {
    const getMovieDetails = async movieId => {
      try {
        const movieData = await getDetails(movieId);
        setDetails(movieData);
      } catch (error) {
        console.error(error);
      }
    };

    getMovieDetails(movieId);
  }, [movieId]);

  return (
    <>
      <Link to={backLinkLocationRef.current}>
        <Button>Go back</Button>
      </Link>
      <MovieCard movie={details} />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
