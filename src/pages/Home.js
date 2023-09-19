import { fetchData } from 'Api';
import { MoviesList } from 'components/MoviesList/MoviesList';

import { useEffect, useState } from 'react';

const Home = () => {
  const [topMovies, setTopMovies] = useState([]);
  useEffect(() => {
    const endpoint = 'trending/movie/day';
    async function getTopMovies() {
      try {
        const topMoviesList = await fetchData(endpoint);
        console.log(topMoviesList);
        setTopMovies(topMoviesList.results);
      } catch (error) {
        console.error(error);
      } finally {
      }
    }
    getTopMovies();
  }, []);
  return (
    <div>
      Trending Today
      <MoviesList movies={topMovies} />
    </div>
  );
};

export default Home;
