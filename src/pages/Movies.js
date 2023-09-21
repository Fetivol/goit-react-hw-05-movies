import { MoviesList } from 'components/MoviesList/MoviesList';
import { fetchQueryMovies } from '../components/Data/Api';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Container } from './Home.styled';
const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    async function fetchMoviesList() {
      if (!query) {
        return;
      }
      try {
        const queryParams = { query };
        const movies = await fetchQueryMovies(queryParams);
        setMovies(movies.results);
      } catch (error) {
        console.error(error);
      } finally {
      }
    }
    fetchMoviesList();
  }, [query]);

  const handleSubmit = evt => {
    evt.preventDefault();
    const queryString = evt.currentTarget.elements.query.value;
    if (queryString === '') {
      return;
    }
    setSearchParams({ query: queryString });
    evt.currentTarget.reset();
  };

  return (
    <Container>
      <SearchBar onSubmit={handleSubmit} />
      {movies.length > 0 && <MoviesList movies={movies} />}
    </Container>
  );
};

export default Movies;
