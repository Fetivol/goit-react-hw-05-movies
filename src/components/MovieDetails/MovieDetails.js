import { Loader } from 'components/Loader/Loader';
import {
  DescriptionWrapper,
  ImgStyled,
  MovieTitle,
  Wrapper,
  MovieOverview,
  MovieGenres,
  TextStyled,
} from './MovieDetails.styled';

const defaultImg =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

export const MovieDetails = ({ movieDetails, loader }) => {
  return (
    <Wrapper>
      {loader && <Loader />}
      <ImgStyled
        src={
          movieDetails.poster_path
            ? `https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`
            : defaultImg
        }
        alt={movieDetails.title}
        width={250}
      />

      <DescriptionWrapper>
        <MovieTitle>
          {movieDetails.title} (
          {new Date(movieDetails.release_date).getFullYear()})
        </MovieTitle>
        <TextStyled>
          User score: {Math.ceil((movieDetails.vote_average / 10) * 100)}%
        </TextStyled>
        <MovieOverview>Overview</MovieOverview>
        <TextStyled>{movieDetails.overview}</TextStyled>
        <MovieGenres>Genres</MovieGenres>
        <TextStyled>
          {Array.isArray(movieDetails.genres)
            ? movieDetails.genres.map(elem => {
                return `${elem.name}  `;
              })
            : 'No genres available'}
        </TextStyled>
      </DescriptionWrapper>
    </Wrapper>
  );
};
