import { fetchMovieCast } from 'Api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const { movie_id } = useParams();
  console.log(movie_id);
  const [cast, setMovieCast] = useState([]);

  useEffect(() => {
    async function getMovieCast() {
      try {
        const movieCast = await fetchMovieCast(movie_id);
        console.log(movieCast);
        setMovieCast(movieCast.cast);
      } catch (error) {
        console.error(error);
      } finally {
      }
    }

    getMovieCast();
  }, [movie_id]);
  return (
    <ul>
      {cast.map(actor => {
        return (
          <li>
            <img
              src={
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/w185/${actor.profile_path}`
                  : defaultImg
              }
              alt={actor.name}
              width={185}
              height={278}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default Cast;
