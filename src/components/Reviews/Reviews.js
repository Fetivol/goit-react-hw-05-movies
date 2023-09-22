import { fetchMovieReviews } from 'Data/Api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ListWrapper, ListElement, AuthorStyled, Text } from './Reviews.styled';
import { Loader } from 'components/Loader/Loader';
import toast, { Toaster } from 'react-hot-toast';

const Reviews = () => {
  const { movie_id } = useParams();
  const [reviews, setMovieReviews] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!movie_id) {
      toast.error('Something went wrong, please reload the site!');
      return;
    }
    async function getMovieReviews() {
      setLoader(true);
      try {
        const movieCast = await fetchMovieReviews(movie_id);
        setMovieReviews(movieCast.results);
      } catch (error) {
        console.error(error);
        setError(true);
        toast.error('Something went wrong, please reload the site!');
      } finally {
        setLoader(false);
      }
    }

    getMovieReviews();
  }, [movie_id, error]);

  return (
    <>
      {loader && <Loader />}
      {reviews.length > 0 ? (
        <ListWrapper>
          {reviews.map(({ author, content, id }) => {
            return (
              <ListElement key={id}>
                <AuthorStyled>Author: {author}</AuthorStyled>
                <p>{content}</p>
              </ListElement>
            );
          })}
        </ListWrapper>
      ) : (
        <Text>We don't have any reviews for this movie.</Text>
      )}
      <Toaster />
    </>
  );
};

export default Reviews;
