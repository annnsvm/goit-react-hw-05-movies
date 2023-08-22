import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  const { genres, title, overview, release_date, vote_average, poster_path } =
    movie;

  const userScore = vote_average
    ? `${(vote_average * 10).toFixed(0)}%`
    : 'Not rated yet';

  const posterUrl = poster_path
    ? `https://image.tmdb.org/t/p/w400/${poster_path}`
    : 'https://via.placeholder.com/400x600.png?text=Poster+Not+Available';

  const releaseDate = new Date(release_date);
  return (
    <>
      <div>
        <img src={posterUrl} alt={title} width="200" />
        <div>
          <h2>
            {title}
            <span>({releaseDate.getFullYear()})</span>
          </h2>
          <p>User score: {userScore}</p>
          <h3>Overview </h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <span>
            {genres
              ? genres.map(({ name }) => name).join(', ')
              : 'No genres available'}
          </span>
        </div>
        <div>
          <p>Additional information</p>
          <ul>
            <li>
              <Link to={'cast'}>Cast</Link>
            </li>
            <li>
              <Link to={'reviews'}>Reviews</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
