import { fetchTopMovies } from 'components/Data/Api';
import { MoviesList } from 'components/MoviesList/MoviesList';

import { useEffect, useState } from 'react';
import { Container, Title } from './Home.styled';

const Home = () => {
  const [topMovies, setTopMovies] = useState([]);
  useEffect(() => {
    async function getTopMovies() {
      try {
        const topMoviesList = await fetchTopMovies();
        setTopMovies(topMoviesList.results);
      } catch (error) {
        console.error(error);
      } finally {
      }
    }
    getTopMovies();
  }, []);
  return (
    <Container>
      <Title>Trending Today</Title>
      <MoviesList movies={topMovies} />
    </Container>
  );
};

export default Home;
