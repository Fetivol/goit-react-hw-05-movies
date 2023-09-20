import { fetchMovie } from 'Api';
import { MovieDetails } from 'components/MovieDetails/MovieDetails';
import { useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
const MoviePage = () => {
  const location = useLocation();
  const backLink = location.state?.from ?? '/';
  const { movie_id } = useParams();
  const [movieDetails, setMovieDetails] = useState({});

  useEffect(() => {
    async function getTopMovies() {
      try {
        const movieDetails = await fetchMovie(movie_id);
        console.log(movieDetails);
        setMovieDetails(movieDetails);
      } catch (error) {
        console.error(error);
      } finally {
      }
    }

    getTopMovies();
  }, [movie_id]);

  return (
    <div>
      Movie page {movie_id} with description
      <Link to={backLink}>Back to the list</Link>
      <MovieDetails movieDetails={movieDetails} />
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
