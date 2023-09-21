import { fetchMovie } from 'components/Data/Api';
import { MovieDetails } from 'components/MovieDetails/MovieDetails';
import { useEffect, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { Wrapper, ListWrapper, BackLink, LinkStyled } from './MoviePage.styled';
const MoviePage = () => {
  const location = useLocation();
  const backLink = location.state?.from ?? '/';
  const { movie_id } = useParams();
  const [movieDetails, setMovieDetails] = useState({});

  useEffect(() => {
    if (!movie_id) {
      return;
    }
    async function getTopMovies() {
      try {
        const movieDetails = await fetchMovie(movie_id);
        setMovieDetails(movieDetails);
      } catch (error) {
        console.error(error);
      } finally {
      }
    }

    getTopMovies();
  }, [movie_id]);

  return (
    <Wrapper>
      <BackLink to={backLink}>Back to the list</BackLink>
      <MovieDetails movieDetails={movieDetails} />
      <ListWrapper>
        <li>
          <LinkStyled to="cast">Cast</LinkStyled>
        </li>
        <li>
          <LinkStyled to="reviews">Reviews</LinkStyled>
        </li>
      </ListWrapper>
      <Outlet />
    </Wrapper>
  );
};

export default MoviePage;
