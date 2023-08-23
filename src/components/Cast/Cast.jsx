import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { getCast } from '../../services/api';
import {
  CastList,
  CastItem,
  CastListTitle,
  CastCardInfo,
  CastCardImg,
} from './Cast.styled';

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
      <CastListTitle>Cast</CastListTitle>
      {cast.length ? (
        <CastList>
          {cast.map(({ id, profile_path, name, character }) => (
            <CastItem key={id}>
              {profile_path ? (
                <CastCardImg
                  src={`https://image.tmdb.org/t/p/w200/${profile_path}`}
                  alt={`${name}`}
                />
              ) : (
                <CastCardImg
                  src="https://via.placeholder.com/200x300.png?text=Poster+Not+Available"
                  alt={`${name}`}
                />
              )}
              <CastCardInfo>
                <p>{name}</p>
                <p>{character}</p>
              </CastCardInfo>
            </CastItem>
          ))}
        </CastList>
      ) : (
        <p>We don't have any information about cast yet</p>
      )}
    </>
  );
};

export default Cast;
