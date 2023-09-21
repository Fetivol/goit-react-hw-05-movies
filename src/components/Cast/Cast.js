import { fetchMovieCast } from 'components/Data/Api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  ListWrapper,
  ListElement,
  ImgStyled,
  Text1,
  Text2,
} from './Cast.styled';

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
    <ListWrapper>
      {cast.length > 0 ? (
        cast.map(actor => {
          return (
            <ListElement key={actor.id}>
              <ImgStyled
                src={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/w185/${actor.profile_path}`
                    : defaultImg
                }
                alt={actor.name}
                width={185}
                height={278}
              />
              <Text2>{actor.name}</Text2>
              <Text1>Character: {actor.character}</Text1>
            </ListElement>
          );
        })
      ) : (
        <Text2>No cast available for this movie.</Text2>
      )}
    </ListWrapper>
  );
};

export default Cast;
