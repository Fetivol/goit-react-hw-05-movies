import { useLocation } from 'react-router-dom';
import {
  MoviesListStyled,
  MoviesListElementStyled,
  MovieLink,
} from './MoviesList.styled';

export const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <MoviesListStyled>
      {movies.map(({ id, title }) => {
        return (
          <MoviesListElementStyled key={id}>
            <MovieLink to={`/movies/${id}`} state={{ from: location }}>
              {title}
            </MovieLink>
          </MoviesListElementStyled>
        );
      })}
    </MoviesListStyled>
  );
};
