import { MoviesList } from 'components/MoviesList/MoviesList';
import { fetchQueryMovies } from '../Data/Api';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Container } from './Home.styled';
import { Loader } from 'components/Loader/Loader';
import toast, { Toaster } from 'react-hot-toast';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchMoviesList() {
      if (!query && error) {
        toast.error('Something went wrong, please reload the site!');
        return;
      }
      setLoader(true);
      try {
        const queryParams = { query };
        const movies = await fetchQueryMovies(queryParams);
        setMovies(movies.results);
      } catch (error) {
        console.error(error);
        setError(true);
        toast.error('Something went wrong, please reload the site!');
      } finally {
        setLoader(false);
      }
    }
    fetchMoviesList();
  }, [query, error]);

  const handleSubmit = evt => {
    evt.preventDefault();
    const queryString = evt.currentTarget.elements.query.value;
    if (queryString.trim() === '') {
      toast.error('Please fill the form to search!');
      return;
    }
    setSearchParams({ query: queryString });
    evt.currentTarget.reset();
  };

  return (
    <Container>
      <SearchBar onSubmit={handleSubmit} />
      {loader && <Loader />}
      {movies.length > 0 && <MoviesList movies={movies} />}
      <Toaster />
    </Container>
  );
};

export default Movies;
