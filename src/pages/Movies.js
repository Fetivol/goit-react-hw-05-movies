import { MoviesList } from 'components/MoviesList/MoviesList';
import { fetchQueryMovies } from '../Api';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    // const endpoint = `search/movie`;

    async function fetchMoviesList() {
      if (!query) {
        return;
      }
      try {
        const queryParams = { query };
        const movies = await fetchQueryMovies(queryParams);
        console.log(movies);
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
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <MoviesList movies={movies} />
    </div>
  );
};

export default Movies;
