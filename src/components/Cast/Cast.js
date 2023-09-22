import { fetchMovieCast } from 'Data/Api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  ListWrapper,
  ListElement,
  ImgStyled,
  Text1,
  Text2,
} from './Cast.styled';
import { Loader } from 'components/Loader/Loader';
import toast, { Toaster } from 'react-hot-toast';

const defaultImg =
  'https://png.pngtree.com/png-vector/20191002/ourmid/pngtree-comedy-and-tragedy-theatrical-masks-icon-png-image_1783971.jpg';
const Cast = () => {
  const { movie_id } = useParams();
  const [cast, setMovieCast] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!movie_id) {
      toast.error('Something went wrong, please reload the site!');
      return;
    }
    async function getMovieCast() {
      setLoader(true);
      try {
        const movieCast = await fetchMovieCast(movie_id);
        setMovieCast(movieCast.cast);
      } catch (error) {
        console.error(error);
        setError(true);
        toast.error('Something went wrong, please reload the site!');
      } finally {
        setLoader(false);
      }
    }

    getMovieCast();
  }, [movie_id, error]);
  return (
    <>
      {loader && <Loader />}
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
      <Toaster />
    </>
  );
};

export default Cast;
