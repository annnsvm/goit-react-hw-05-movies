import {
  MovieCardContainer,
  MovieCardTitle,
  MovieCardSubTitle,
  MovieCardText,
  MovieCardSubContainer,
  MovieCardInfo,
  MovieCardList,
  MovieCardLink,
} from '../MovieCard/MovieCard.styled';

const MovieCard = ({ movie }) => {
  const { genres, title, overview, release_date, vote_average, poster_path } =
    movie;

  const userScore = vote_average
    ? `${(vote_average * 10).toFixed(0)}%`
    : 'Not rated yet';

  const posterUrl = poster_path
    ? `https://image.tmdb.org/t/p/w300/${poster_path}`
    : 'https://via.placeholder.com/400x600.png?text=Poster+Not+Available';

  const releaseDate = new Date(release_date);
  return (
    <>
      <MovieCardContainer>
        <img src={posterUrl} alt={title} width="250" />

        <div>
          <MovieCardTitle>
            {title}
            <span>({releaseDate.getFullYear()})</span>
          </MovieCardTitle>
          <MovieCardText>User score: {userScore}</MovieCardText>
          <MovieCardSubTitle>Overview </MovieCardSubTitle>
          <MovieCardText>{overview}</MovieCardText>
          <MovieCardSubTitle>Genres</MovieCardSubTitle>
          <span>
            {genres
              ? genres.map(({ name }) => name).join(', ')
              : 'No genres available'}
          </span>
        </div>
      </MovieCardContainer>
      <MovieCardSubContainer>
        <MovieCardInfo>Additional information</MovieCardInfo>
        <MovieCardList>
          <li>
            <MovieCardLink to={'cast'}>Cast</MovieCardLink>
          </li>
          <li>
            <MovieCardLink to={'reviews'}>Reviews</MovieCardLink>
          </li>
        </MovieCardList>
      </MovieCardSubContainer>
    </>
  );
};

export default MovieCard;
