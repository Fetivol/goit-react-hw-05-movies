import { Link, Outlet, useParams } from 'react-router-dom';

const MoviePage = () => {
  const { movie_id } = useParams();
  console.log(movie_id);
  return (
    <div>
      Movie page with description
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default MoviePage;
