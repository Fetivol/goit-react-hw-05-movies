import { fetchData } from 'Api';

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';

const Home = () => {
  //   console.log(fetchTopMovies);
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
      <ul>
        {topMovies.map(({ id, title }) => {
          return (
            <li key={id}>
              <Link to={`movies/${id}`}>{title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Home;
