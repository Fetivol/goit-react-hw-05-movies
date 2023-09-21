import { fetchMovieCast } from 'Api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const defaultImg =
  'https://png.pngtree.com/png-vector/20191002/ourmid/pngtree-comedy-and-tragedy-theatrical-masks-icon-png-image_1783971.jpg';
const Cast = () => {
  const { movie_id } = useParams();
  const [cast, setMovieCast] = useState([]);

  useEffect(() => {
    if (!movie_id) {
      return;
    }
    async function getMovieCast() {
      try {
        const movieCast = await fetchMovieCast(movie_id);
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
      {cast.length > 0 ? (
        cast.map(actor => {
          return (
            <li key={actor.id}>
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
              <p>{actor.name}</p>
              <p>Character: {actor.character}</p>
            </li>
          );
        })
      ) : (
        <p>No cast available for this movie.</p>
      )}
    </ul>
  );
};

export default Cast;
