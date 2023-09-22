import { fetchMovie } from 'Data/Api';
import { MovieDetails } from 'components/MovieDetails/MovieDetails';
import { useEffect, useRef, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import {
  Wrapper,
  ListWrapper,
  BackLink,
  LinkStyled,
  ListElement,
} from './MoviePage.styled';
import toast, { Toaster } from 'react-hot-toast';
const MoviePage = () => {
  const location = useLocation();
  const backLink = useRef(location.state?.from ?? '/');
  const { movie_id } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!movie_id) {
      toast.error('Something went wrong, please reload the site!');
      return;
    }
    async function getTopMovies() {
      setLoader(true);
      try {
        const movieDetails = await fetchMovie(movie_id);
        setMovieDetails(movieDetails);
      } catch (error) {
        console.error(error);
        setError(true);
        toast.error('Something went wrong, please reload the site!');
      } finally {
        setLoader(false);
      }
    }

    getTopMovies();
  }, [movie_id, error]);

  return (
    <Wrapper>
      <BackLink to={backLink.current}>Back to the list</BackLink>
      {movieDetails && (
        <MovieDetails movieDetails={movieDetails} loader={loader} />
      )}
      <ListWrapper>
        <ListElement>
          <LinkStyled to="cast">Cast</LinkStyled>
        </ListElement>
        <ListElement>
          <LinkStyled to="reviews">Reviews</LinkStyled>
        </ListElement>
      </ListWrapper>
      <Outlet />
      <Toaster />
    </Wrapper>
  );
};

export default MoviePage;
