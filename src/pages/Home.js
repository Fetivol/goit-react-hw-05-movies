import { fetchTopMovies } from 'Data/Api';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { useEffect, useState } from 'react';
import { Container, Title } from './Home.styled';
import { Loader } from 'components/Loader/Loader';
import toast, { Toaster } from 'react-hot-toast';

const Home = () => {
  const [topMovies, setTopMovies] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    async function getTopMovies() {
      setLoader(true);
      try {
        const topMoviesList = await fetchTopMovies();
        setTopMovies(topMoviesList.results);
      } catch (error) {
        console.error(error);
        setError(true);
        toast.error('Something went wrong, please reload the site!');
      } finally {
        setLoader(false);
        setError(false);
      }
    }
    getTopMovies();
  }, [error]);
  return (
    <Container>
      <Title>Trending Today</Title>
      {loader && <Loader />}
      {topMovies.length > 0 && <MoviesList movies={topMovies} />}
      <Toaster />
    </Container>
  );
};

export default Home;
