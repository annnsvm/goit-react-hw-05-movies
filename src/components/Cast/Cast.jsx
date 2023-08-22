import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { getCast } from '../../services/api';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const { cast } = await getCast(movieId);
        setCast(cast);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCast();
  }, [movieId]);

  return (
    <>
      <h2>Cast</h2>
      {cast.length ? (
        <ul>
          {cast.map(({ id, profile_path, name, character }) => (
            <li key={id}>
              {profile_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w200/${profile_path}`}
                  alt={`${name}`}
                />
              ) : (
                <img
                  src="https://via.placeholder.com/200x300.png?text=Poster+Not+Available"
                  alt={`${name}`}
                />
              )}
              <div>
                <p>{name}</p>
                <p>Character: {character}</p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>We don't have any information about cast yet</p>
      )}
    </>
  );
};

export default Cast;
