const { Link } = require('react-router-dom');

const MovieList = ({ trendMovies }) => {
  return (
    <section>
      <ul>
        {trendMovies.map(({ id, title, poster_path }) => (
          <li key={id}>
            <Link to={`/movies/${id}`}>
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
  );
};

export default MovieList;
