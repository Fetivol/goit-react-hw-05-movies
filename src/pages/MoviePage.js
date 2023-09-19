import { fetchData } from 'Api';
import { MovieDetails } from 'components/MovieDetails/MovieDetails';
import { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
const MoviePage = () => {
  const { movie_id } = useParams();
  console.log(movie_id);

  const [movieDetails, setMovieDetails] = useState({});

  useEffect(() => {
    const endpoint = `/movie/${movie_id}`;
    console.log(endpoint);

    async function getTopMovies() {
      try {
        const movieDetails = await fetchData(endpoint);
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
