import axios from 'axios';

const API_KEY = 'e0e06ce84ec1645b34a648802846e1d8';
const BASE_URL = 'https://api.themoviedb.org/3';
const LANG = 'language=en-US';

export const getTrading = async () => {
  const { data } = await axios.get(
    `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`
  );
  return data;
};

export const getMovie = async query => {
  const { data } = await axios.get(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&${LANG}&page=1&include_adult=false`
  );
  return data;
};

export const getDetails = async movieId => {
  const { data } = await axios.get(
    `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&${LANG}`
  );
  return data;
};

export const getCast = async movieId => {
  const { data } = await axios.get(
    `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}&${LANG}`
  );
  return data;
};

export const getReviews = async movieId => {
  const { data } = await axios.get(
    `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}&${LANG}&page=1`
  );
  return data;
};
